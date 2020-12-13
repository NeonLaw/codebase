data "terraform_remote_state" "gcp" {
  backend = "remote"

  config = {
    hostname     = "app.terraform.io"
    organization = "neon-law"
    workspaces = {
      name = "${var.environment}-gcp"
    }
  }
}

provider "google" {
  project = data.terraform_remote_state.gcp.outputs.project_id
  region  = data.terraform_remote_state.gcp.outputs.region
  zone    = data.terraform_remote_state.gcp.outputs.zone

  credentials = data.terraform_remote_state.gcp.outputs.gcp_credentials
}

provider "google-beta" {
  project = data.terraform_remote_state.gcp.outputs.project_id
  region  = data.terraform_remote_state.gcp.outputs.region
  zone    = data.terraform_remote_state.gcp.outputs.zone

  credentials = data.terraform_remote_state.gcp.outputs.gcp_credentials
}

provider "kubernetes" {
  load_config_file = false

  host     = data.terraform_remote_state.gcp.outputs.gke_host
  username = data.terraform_remote_state.gcp.outputs.gke_username
  password = data.terraform_remote_state.gcp.outputs.gke_password

  client_certificate     = base64decode(data.terraform_remote_state.gcp.outputs.gke_client_certificate)
  client_key             = base64decode(data.terraform_remote_state.gcp.outputs.gke_client_key)
  cluster_ca_certificate = base64decode(data.terraform_remote_state.gcp.outputs.gke_cluster_ca_certificate)
}

provider "helm" {
  kubernetes {
    load_config_file = false
    host     = "https://${data.terraform_remote_state.gcp.outputs.gke_host}"
    username = data.terraform_remote_state.gcp.outputs.gke_username
    password = data.terraform_remote_state.gcp.outputs.gke_password

    client_certificate     = base64decode(data.terraform_remote_state.gcp.outputs.gke_client_certificate)
    client_key             = base64decode(data.terraform_remote_state.gcp.outputs.gke_client_key)
    cluster_ca_certificate = base64decode(data.terraform_remote_state.gcp.outputs.gke_cluster_ca_certificate)
  }
}

provider "kubernetes-alpha" {
  server_side_planning = true

  host     = "https://${data.terraform_remote_state.gcp.outputs.gke_host}"

  client_certificate     = base64decode(data.terraform_remote_state.gcp.outputs.gke_client_certificate)
  client_key             = base64decode(data.terraform_remote_state.gcp.outputs.gke_client_key)
  cluster_ca_certificate = base64decode(data.terraform_remote_state.gcp.outputs.gke_cluster_ca_certificate)
}

module "application_secrets" {
  source                        = "../modules/application_secrets"
  auth0_client_id               = var.auth0_client_id
  environment                   = var.environment
  auth0_client_secret           = var.auth0_client_secret
  auth0_tenant                  = var.auth0_tenant
  transloadit_key               = var.transloadit_key
  transloadit_secret            = var.transloadit_secret
  transloadit_pdf_template_id   = var.transloadit_pdf_template_id
  transloadit_image_template_id = var.transloadit_image_template_id
  new_relic_license_key         = var.new_relic_license_key
  sendgrid_api_key              = var.sendgrid_api_key
  lob_api_key                   = var.lob_api_key
  lob_api_secret                = var.lob_api_secret
  stripe_api_publishable_key    = var.stripe_api_publishable_key
  stripe_api_secret_key         = var.stripe_api_secret_key
}

module "gcp_credentials_kubernetes_secret" {
  source       = "../modules/kubernetes_secret"
  secret_name  = "gcp-credentials"
  secret_value = data.terraform_remote_state.gcp.outputs.application_user_account_key
}

module "api_deployment" {
  source       = "../modules/server_deployment"
  environment  = var.environment
  process_name = "workers"
  image_url    = "${data.terraform_remote_state.gcp.outputs.container_registry}/server:latest"

  database_admin_password = data.terraform_remote_state.gcp.outputs.database_admin_password
  database_admin_username = data.terraform_remote_state.gcp.outputs.database_admin_username
  database_name           = data.terraform_remote_state.gcp.outputs.database_name
  project_id              = data.terraform_remote_state.gcp.outputs.project_id
  region                  = data.terraform_remote_state.gcp.outputs.region

  args = [
    "yarn",
    "workspace",
    "@neonlaw/server",
    "start:api",
  ]
}

module "worker_deployment" {
  source       = "../modules/server_deployment"
  environment  = var.environment
  process_name = "workers"
  image_url    = "${data.terraform_remote_state.gcp.outputs.container_registry}/server:latest"

  database_admin_password = data.terraform_remote_state.gcp.outputs.database_admin_password
  database_admin_username = data.terraform_remote_state.gcp.outputs.database_admin_username
  database_name           = data.terraform_remote_state.gcp.outputs.database_name
  project_id              = data.terraform_remote_state.gcp.outputs.project_id
  region                  = data.terraform_remote_state.gcp.outputs.region


  args = [
    "yarn",
    "workspace",
    "@neonlaw/server",
    "start:workers",
  ]
}

module "interface_deployment" {
  source    = "../modules/interface_deployment"
  app_name  = "interface"
  image_url = "${data.terraform_remote_state.gcp.outputs.container_registry}/interface:latest"
}

module "law-job-resources_deployment" {
  source    = "../modules/interface_deployment"
  app_name  = "law-job-resources"
  image_url = "${data.terraform_remote_state.gcp.outputs.container_registry}/law-job-resources:latest"
}

module "ingress" {
  source = "../modules/kubernetes_ingress"
}

module "new_relic" {
  source = "../modules/new_relic_helm"
  environment = "production"
  new_relic_license_key = var.new_relic_license_key
}

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
  host     = data.terraform_remote_state.gcp.outputs.gke_host
  username = data.terraform_remote_state.gcp.outputs.gke_username
  password = data.terraform_remote_state.gcp.outputs.gke_password

  client_certificate     = base64decode(data.terraform_remote_state.gcp.outputs.gke_client_certificate)
  client_key             = base64decode(data.terraform_remote_state.gcp.outputs.gke_client_key)
  cluster_ca_certificate = base64decode(data.terraform_remote_state.gcp.outputs.gke_cluster_ca_certificate)
}

provider "helm" {
  kubernetes {
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

  host = "https://${data.terraform_remote_state.gcp.outputs.gke_host}"

  client_certificate     = base64decode(data.terraform_remote_state.gcp.outputs.gke_client_certificate)
  client_key             = base64decode(data.terraform_remote_state.gcp.outputs.gke_client_key)
  cluster_ca_certificate = base64decode(data.terraform_remote_state.gcp.outputs.gke_cluster_ca_certificate)
}

module "redis" {
  source      = "./modules/redis_helm"
  environment = var.environment
}

module "neo4j" {
  source      = "./modules/neo4j_helm"
  environment = var.environment
}

module "application_secrets" {
  source                     = "./modules/application_secrets"
  api_url                    = var.api_url
  auth0_client_id            = var.auth0_client_id
  auth0_client_secret        = var.auth0_client_secret
  auth0_tenant               = var.auth0_tenant
  environment                = var.environment
  lob_api_key                = var.lob_api_key
  lob_api_secret             = var.lob_api_secret
  redis_url                  = "redis://${var.environment}-redis-headless:6379"
  neo4j_url                  = "bolt://${var.environment}-neo4j-neo4j:7687"
  sendgrid_api_key           = var.sendgrid_api_key
  stripe_api_publishable_key = var.stripe_api_publishable_key
  stripe_api_secret_key      = var.stripe_api_secret_key
  transloadit_key            = var.transloadit_key
  transloadit_template_id    = var.transloadit_template_id
  transloadit_secret         = var.transloadit_secret
}

module "gcp_credentials_kubernetes_secret" {
  source       = "./modules/kubernetes_secret"
  secret_name  = "gcp-credentials"
  secret_value = base64decode(data.terraform_remote_state.gcp.outputs.application_user_account_key)
}

module "api_deployment" {
  source       = "./modules/server_deployment"
  environment  = var.environment
  process_name = "api"
  image_url    = "${data.terraform_remote_state.gcp.outputs.container_registry}/server:latest"

  database_admin_password = data.terraform_remote_state.gcp.outputs.database_admin_password
  database_admin_username = data.terraform_remote_state.gcp.outputs.database_admin_username
  database_name           = "neon-law"
  project_id              = data.terraform_remote_state.gcp.outputs.project_id
  region                  = data.terraform_remote_state.gcp.outputs.region

  args = [
    "yarn",
    "start:api",
  ]
}

module "worker_deployment" {
  source       = "./modules/background_job_deployment"
  environment  = var.environment
  process_name = "workers"
  image_url    = "${data.terraform_remote_state.gcp.outputs.container_registry}/server:latest"

  database_admin_password = data.terraform_remote_state.gcp.outputs.database_admin_password
  database_admin_username = data.terraform_remote_state.gcp.outputs.database_admin_username
  database_name           = "neon-law"
  project_id              = data.terraform_remote_state.gcp.outputs.project_id
  region                  = data.terraform_remote_state.gcp.outputs.region

  args = [
    "yarn",
    "start:workers",
  ]
}

module "ingress" {
  source      = "./modules/kubernetes_ingress"
  environment = var.environment
}

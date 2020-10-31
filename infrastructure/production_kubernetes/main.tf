data "terraform_remote_state" "production_gcp" {
  backend = "remote"

  config = {
    hostname     = "app.terraform.io"
    organization = "neon-law"
    workspaces = {
      name = "production-gcp"
    }
  }
}

provider "google" {
  project = data.terraform_remote_state.production_gcp.outputs.project_id
  region  = data.terraform_remote_state.production_gcp.outputs.region
  zone    = data.terraform_remote_state.production_gcp.outputs.zone

  credentials = data.terraform_remote_state.production_gcp.outputs.gcp_credentials
}

provider "google-beta" {
  project = data.terraform_remote_state.production_gcp.outputs.project_id
  region  = data.terraform_remote_state.production_gcp.outputs.region
  zone    = data.terraform_remote_state.production_gcp.outputs.zone

  credentials = data.terraform_remote_state.production_gcp.outputs.gcp_credentials
}

provider "kubernetes" {
  load_config_file = false

  host     = data.terraform_remote_state.production_gcp.outputs.gke_host
  username = data.terraform_remote_state.production_gcp.outputs.gke_username
  password = data.terraform_remote_state.production_gcp.outputs.gke_password

  client_certificate     = base64decode(data.terraform_remote_state.production_gcp.outputs.gke_client_certificate)
  client_key             = base64decode(data.terraform_remote_state.production_gcp.outputs.gke_client_key)
  cluster_ca_certificate = base64decode(data.terraform_remote_state.production_gcp.outputs.gke_cluster_ca_certificate)
}

provider "helm" {
  kubernetes {
    host     = data.terraform_remote_state.production_gcp.outputs.gke_host
    username = data.terraform_remote_state.production_gcp.outputs.gke_username
    password = data.terraform_remote_state.production_gcp.outputs.gke_password

    client_certificate     = base64decode(data.terraform_remote_state.production_gcp.outputs.gke_client_certificate)
    client_key             = base64decode(data.terraform_remote_state.production_gcp.outputs.gke_client_key)
    cluster_ca_certificate = base64decode(data.terraform_remote_state.production_gcp.outputs.gke_cluster_ca_certificate)
  }
}

provider "kubernetes-alpha" {
  server_side_planning = true

  host     = "https://${data.terraform_remote_state.production_gcp.outputs.gke_host}"

  client_certificate     = base64decode(data.terraform_remote_state.production_gcp.outputs.gke_client_certificate)
  client_key             = base64decode(data.terraform_remote_state.production_gcp.outputs.gke_client_key)
  cluster_ca_certificate = base64decode(data.terraform_remote_state.production_gcp.outputs.gke_cluster_ca_certificate)
}

module "sql_proxy_kubernetes_secret" {
  source       = "../modules/kubernetes_secret"
  secret_name  = "sql-proxy-service-account-token"
  secret_value = var.sql_proxy_gcp_credentials
}

module "third_party_saas_kubernetes_secret" {
  source              = "../modules/third_party_saas_kubernetes_secret"
  secret_name         = "third-party-saas"
  auth0_client_id     = var.auth0_client_id
  auth0_client_secret = var.auth0_client_secret
  auth0_tenant        = "auth.neonlaw.com"
}

module "logic_kubernetes_secret" {
  source       = "../modules/kubernetes_secret"
  secret_name  = "logic"
  secret_value = var.logic_gcp_credentials
}

module "api_deployment" {
  source                       = "../modules/api_deployment"
  app_name                     = "production-api"
  new_relic_app_name           = "production"
  image_url                    = "${data.terraform_remote_state.production_gcp.outputs.container_registry}/api:latest"
  database_name                = "neon-law"
  show_graphiql                = "false"
  project_id                   = data.terraform_remote_state.production_gcp.outputs.project_id
  region                       = data.terraform_remote_state.production_gcp.outputs.region
  sql_proxy_secret_name        = module.sql_proxy_kubernetes_secret.name
  third_party_saas_secret_name = module.third_party_saas_kubernetes_secret.name
  logic_secret_name            = module.logic_kubernetes_secret.name
  master_database_password     = var.master_database_password
  new_relic_license_key        = var.new_relic_license_key
}

module "worker_deployment" {
  source                       = "../modules/worker_deployment"
  app_name                     = "production-workers"
  database_name                = "neon-law"
  image_url                    = "${data.terraform_remote_state.production_gcp.outputs.container_registry}/api:latest"
  logic_secret_name            = module.logic_kubernetes_secret.name
  master_database_password     = var.master_database_password
  new_relic_app_name           = "production"
  new_relic_license_key        = var.new_relic_license_key
  project_id                   = data.terraform_remote_state.production_gcp.outputs.project_id
  region                       = data.terraform_remote_state.production_gcp.outputs.region
  sql_proxy_secret_name        = module.sql_proxy_kubernetes_secret.name
  third_party_saas_secret_name = module.third_party_saas_kubernetes_secret.name
}

module "interface_deployment" {
  source    = "../modules/interface_deployment"
  app_name  = "interface"
  image_url = "${data.terraform_remote_state.production_gcp.outputs.container_registry}/interface:latest"
}

module "law-job-resources_deployment" {
  source    = "../modules/interface_deployment"
  app_name  = "law-job-resources"
  image_url = "${data.terraform_remote_state.production_gcp.outputs.container_registry}/law-job-resources:latest"
}

module "justice_for_rickie_slaughter_deployment" {
  source    = "../modules/interface_deployment"
  app_name  = "justice-for-rickie-slaughter"
  image_url = "${data.terraform_remote_state.production_gcp.outputs.container_registry}/justice-for-rickie-slaughter:latest"
}

module "delete_your_data_deployment" {
  source    = "../modules/interface_deployment"
  app_name  = "delete-your-data"
  image_url = "${data.terraform_remote_state.production_gcp.outputs.container_registry}/delete-your-data:latest"
}

module "ingress" {
  source = "../modules/production_ingress"
}

module "new_relic" {
  source = "../modules/new_relic_helm"
  environment = "production"
  new_relic_license_key = var.new_relic_license_key
}

data "terraform_remote_state" "staging_gcp" {
  backend = "remote"

  config = {
    hostname     = "app.terraform.io"
    organization = "neon-law"
    workspaces = {
      name = "staging-gcp"
    }
  }
}

provider "google" {
  project = data.terraform_remote_state.staging_gcp.outputs.project_id
  region  = data.terraform_remote_state.staging_gcp.outputs.region
  zone    = data.terraform_remote_state.staging_gcp.outputs.zone

  credentials = data.terraform_remote_state.staging_gcp.outputs.gcp_credentials
}

provider "google-beta" {
  project = data.terraform_remote_state.staging_gcp.outputs.project_id
  region  = data.terraform_remote_state.staging_gcp.outputs.region
  zone    = data.terraform_remote_state.staging_gcp.outputs.zone

  credentials = data.terraform_remote_state.staging_gcp.outputs.gcp_credentials
}

provider "kubernetes" {
  load_config_file = false

  host     = data.terraform_remote_state.staging_gcp.outputs.gke_host
  username = data.terraform_remote_state.staging_gcp.outputs.gke_username
  password = data.terraform_remote_state.staging_gcp.outputs.gke_password

  client_certificate     = base64decode(data.terraform_remote_state.staging_gcp.outputs.gke_client_certificate)
  client_key             = base64decode(data.terraform_remote_state.staging_gcp.outputs.gke_client_key)
  cluster_ca_certificate = base64decode(data.terraform_remote_state.staging_gcp.outputs.gke_cluster_ca_certificate)
}

provider "helm" {
  kubernetes {
    load_config_file = false
    host     = "https://${data.terraform_remote_state.staging_gcp.outputs.gke_host}"
    username = data.terraform_remote_state.staging_gcp.outputs.gke_username
    password = data.terraform_remote_state.staging_gcp.outputs.gke_password

    client_certificate     = base64decode(data.terraform_remote_state.staging_gcp.outputs.gke_client_certificate)
    client_key             = base64decode(data.terraform_remote_state.staging_gcp.outputs.gke_client_key)
    cluster_ca_certificate = base64decode(data.terraform_remote_state.staging_gcp.outputs.gke_cluster_ca_certificate)
  }
}

provider "kubernetes-alpha" {
  server_side_planning = true

  host     = "https://${data.terraform_remote_state.staging_gcp.outputs.gke_host}"

  client_certificate     = base64decode(data.terraform_remote_state.staging_gcp.outputs.gke_client_certificate)
  client_key             = base64decode(data.terraform_remote_state.staging_gcp.outputs.gke_client_key)
  cluster_ca_certificate = base64decode(data.terraform_remote_state.staging_gcp.outputs.gke_cluster_ca_certificate)
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
  auth0_tenant        = "neon-law-testing.auth0.com"
}

module "logic_kubernetes_secret" {
  source       = "../modules/kubernetes_secret"
  secret_name  = "logic"
  secret_value = var.logic_gcp_credentials
}

module "api_deployment" {
  source                       = "../modules/api_deployment"
  app_name                     = "staging-api"
  database_name                = "neon-law"
  image_url                    = "${data.terraform_remote_state.staging_gcp.outputs.container_registry}/api:latest"
  logic_secret_name            = module.logic_kubernetes_secret.name
  master_database_password     = var.master_database_password
  new_relic_app_name           = "staging"
  new_relic_license_key        = var.new_relic_license_key
  project_id                   = data.terraform_remote_state.staging_gcp.outputs.project_id
  region                       = data.terraform_remote_state.staging_gcp.outputs.region
  show_graphiql                = "true"
  sql_proxy_secret_name        = module.sql_proxy_kubernetes_secret.name
  third_party_saas_secret_name = module.third_party_saas_kubernetes_secret.name
}

module "worker_deployment" {
  source                       = "../modules/worker_deployment"
  app_name                     = "staging-workers"
  database_name                = "neon-law"
  image_url                    = "${data.terraform_remote_state.staging_gcp.outputs.container_registry}/workers:latest"
  logic_secret_name            = module.logic_kubernetes_secret.name
  master_database_password     = var.master_database_password
  new_relic_app_name           = "staging"
  new_relic_license_key        = var.new_relic_license_key
  project_id                   = data.terraform_remote_state.staging_gcp.outputs.project_id
  region                       = data.terraform_remote_state.staging_gcp.outputs.region
  sql_proxy_secret_name        = module.sql_proxy_kubernetes_secret.name
  third_party_saas_secret_name = module.third_party_saas_kubernetes_secret.name
}

module "interface_deployment" {
  source    = "../modules/interface_deployment"
  app_name  = "interface"
  image_url = "${data.terraform_remote_state.staging_gcp.outputs.container_registry}/interface:latest"
}

module "law_job_resources_deployment" {
  source    = "../modules/interface_deployment"
  app_name  = "law-job-resources"
  image_url = "${data.terraform_remote_state.staging_gcp.outputs.container_registry}/law-job-resources:latest"
}

module "delete_your_data_deployment" {
  source    = "../modules/interface_deployment"
  app_name  = "delete-your-data"
  image_url = "${data.terraform_remote_state.staging_gcp.outputs.container_registry}/delete-your-data:latest"
}

module "staging_ingress" {
  source = "../modules/shared_ingress"
  api_service_name = "staging-api"

  neon_law_interface_service_name = "interface"
  neon_law_host = "www.neonlaw.net"

  law_job_resources_service_name = "law-job-resources"
  law_job_resources_host = "www.lawjobresources.net"

  delete_your_data_service_name = "delete-your-data"
  delete_your_data_host = "www.deleteyourdata.info"
}

module "new_relic" {
  source = "../modules/new_relic_helm"
  environment = "staging"
  new_relic_license_key = var.new_relic_license_key
}

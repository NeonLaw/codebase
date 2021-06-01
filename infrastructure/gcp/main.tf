provider "google" {
  project = var.project_id
  region  = var.region
  zone    = var.zone

  # The Terraform Service Credentials
  credentials = var.gcp_credentials
}

provider "google-beta" {
  project = var.project_id
  region  = var.region
  zone    = var.zone

  credentials = var.gcp_credentials
}

data "terraform_remote_state" "versions" {
  backend = "remote"

  config = {
    hostname     = "app.terraform.io"
    organization = "neon-law"
    workspaces = {
      name = "versions"
    }
  }
}

module "networking_service_connection" {
  source     = "./modules/networking_service_connection"
  project_id = var.project_id
}

module "postgres" {
  source      = "./modules/postgres"
  zone        = var.zone
  region      = var.region
  project_id  = var.project_id
  environment = var.environment
}

module "container_registry" {
  source     = "./modules/container_registry"
  admin_user = "nick@neonlaw.com"
  project_id = var.project_id
}

module "kubernetes_cluster" {
  source      = "./modules/gke"
  region      = var.region
  project_id  = var.project_id
  environment = var.environment
}

module "neon-law-api-ssl-certificate" {
  source           = "./modules/ssl_certificate"
  certificate_name = "neon-law-api"
  domain_name      = var.environment == "production" ? "api.neonlaw.com" : "api.neonlaw.net"
}

module "neon-law-webhooks-ssl-certificate" {
  source           = "./modules/ssl_certificate"
  certificate_name = "neon-law-webhooks"
  domain_name      = var.environment == "production" ? "webhooks.neonlaw.com" : "webhooks.neonlaw.net"
}

module "upload_bucket" {
  source      = "./modules/write_only_bucket"
  bucket_name = "${var.project_id}-unprocessed-uploads"
  allowed_origins = [
    var.environment == "production" ? "www.neonlaw.com" : "www.neonlaw.net"
  ]
}

module "user_bucket" {
  source      = "./modules/private_bucket"
  bucket_name = "${var.project_id}-private-assets"
  allowed_origins = [
    var.environment == "production" ? "www.neonlaw.com" : "www.neonlaw.net"
  ]
}

module "function_bucket" {
  source          = "./modules/private_bucket"
  bucket_name     = "${var.project_id}-function-code"
  allowed_origins = []
}

module "service_accounts" {
  source = "./modules/service_accounts"
}

module "secrets" {
  source = "./modules/secrets"
  environment = var.environment
}

module "pub_sub_topics" {
  for_each = {
    "green" = data.terraform_remote_state.versions.outputs.staging_green_schemas
    "blue"  = data.terraform_remote_state.versions.outputs.staging_blue_schemas
  }

  source         = "./modules/pubsub"
  environment    = var.environment
  color          = each.key
  schema_version = each.value
  project_id     = var.project_id
}

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

module "application_user" {
  source = "./modules/application_user"
}

module "pub_sub_topics" {
  source      = "./modules/pub_sub_topics"
  environment = var.environment
  schema_version     = "0.1.1"
}

module "functions" {
  source      = "./modules/functions"
  environment = var.environment
  schema_version     = "0.1.1"
  bucket_name = "${var.project_id}-function-code"
}

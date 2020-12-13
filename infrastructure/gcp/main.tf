provider "google" {
  project = var.project_id
  region  = var.region
  zone    = var.zone

  credentials = var.gcp_credentials
}

provider "google-beta" {
  project = var.project_id
  region  = var.region
  zone    = var.zone

  credentials = var.gcp_credentials
}

module "networking_service_connection" {
  source     = "../modules/networking_service_connection"
  project_id = var.project_id
}

module "postgres" {
  source        = "../modules/postgres"
  zone          = var.zone
  region        = var.region
  project_id    = var.project_id
  environment = var.environment
}

module "container_registry" {
  source     = "../modules/container_registry"
  admin_user = "nick@neonlaw.com"
  project_id = var.project_id
}

module "kubernetes_cluster" {
  source      = "../modules/google_container_cluster"
  region      = var.region
  project_id  = var.project_id
  environment = var.environment
}

module "neon-law-ssl-certificate" {
  source           = "../modules/ssl_certificate"
  certificate_name = "neon-law"
  domain_name      = var.neon_law_url
}

module "law-job-resources-ssl-certificate" {
  source = "../modules/ssl_certificate"
  certificate_name = "law-job-resources"
  domain_name      = var.law_job_resources_url
}

module "public_bucket" {
  source = "../modules/public_bucket"
  bucket_name = "${var.project_id}-public-assets"
  allowed_origins = [
    var.neon_law_url
  ]
}

module "upload_bucket" {
  source = "../modules/write_only_bucket"
  bucket_name = "${var.project_id}-unprocessed-uploads"
  allowed_origins = [
    var.neon_law_url
  ]
}

module "user_bucket" {
  source = "../modules/private_bucket"
  bucket_name = "${var.project_id}-private-assets"
  allowed_origins = [
    var.neon_law_url
  ]
}

module "company_bucket" {
  source = "../modules/private_bucket"
  bucket_name = "${var.project_id}-company-files"
  allowed_origins = [
    var.neon_law_url
  ]
}

module "application_user" {
  source     = "../modules/application_user"
}

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

module "egress_routing" {
  source = "../modules/egress_routing"
}

module "postgres" {
  source      = "../modules/postgres"
  zone        = var.zone
  region      = var.region
  project_id  = var.project_id
  environment = var.environment
}

module "container_registry" {
  source     = "../modules/container_registry"
  admin_user = "nick@neonlaw.com"
  project_id = var.project_id
}

module "kubernetes_cluster" {
  source     = "../modules/google_container_cluster"
  region     = var.region
  project_id = var.project_id
}

module "neon_law_ssl_certificate" {
  source           = "../modules/ssl_certificate"
  certificate_name = "neon-law"
  domain_name      = "www.neonlaw.com"
}

module "law_job_resources_ssl_certificate" {
  source = "../modules/ssl_certificate"
  certificate_name = "law-job-resources"
  domain_name      = "www.lawjobresources.com"
}

module "public_bucket" {
  source = "../modules/public_bucket"
  bucket_name = "${var.project_id}-public-assets"
  allowed_origins = [
    "www.neonlaw.com"
  ]
}

module "upload_bucket" {
  source = "../modules/write_only_bucket"
  bucket_name = "${var.project_id}-unprocessed-uploads"
  allowed_origins = [
    "www.neonlaw.com"
  ]
}

module "user_bucket" {
  source = "../modules/private_bucket"
  bucket_name = "${var.project_id}-private-assets"
  allowed_origins = [
    "www.neonlaw.com"
  ]
}

module "company_bucket" {
  source = "../modules/private_bucket"
  bucket_name = "${var.project_id}-company-files"
  allowed_origins = [
    "www.neonlaw.com"
  ]
}

module "application_gcp_user" {
  source = "../modules/application_user"
}

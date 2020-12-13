output "gke_host" {
  value     = module.kubernetes_cluster.host
  sensitive = true
}

output "gke_client_certificate" {
  value     = module.kubernetes_cluster.client_certificate
  sensitive = true
}

output "gke_client_key" {
  value     = module.kubernetes_cluster.client_key
  sensitive = true
}

output "gke_cluster_ca_certificate" {
  value     = module.kubernetes_cluster.cluster_ca_certificate
  sensitive = true
}

output "container_registry" {
  value     = module.container_registry.name
  sensitive = true
}

output "project_id" {
  value = "neon-law-production"
}

output "region" {
  value = "us-west4"
}

output "zone" {
  value = "b"
}

output "gcp_credentials" {
  value = var.gcp_credentials
}

output "gke_username" {
  value     = module.kubernetes_cluster.master_username
  sensitive = true
}

output "gke_password" {
  value     = module.kubernetes_cluster.master_password
  sensitive = true
}

output "database_admin_password" {
  value = module.postgres.admin_password
  sensitive = true
}

output "database_admin_username" {
  value = module.postgres.admin_username
  sensitive = true
}

output "upload_bucket_user_credentials" {
  value = module.upload_bucket.gcp_credential_key
  sensitive = true
}

output "application_user_account_key" {
  value = module.application_user.account_key
  sensitive = true
}

output "database_name" {
  value = "neon-law"
}

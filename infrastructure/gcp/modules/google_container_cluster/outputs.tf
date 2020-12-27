output "client_certificate" {
  value     = google_container_cluster.primary.master_auth.0.client_certificate
  sensitive = true
}

output "client_key" {
  value     = google_container_cluster.primary.master_auth.0.client_key
  sensitive = true
}

output "cluster_ca_certificate" {
  value     = google_container_cluster.primary.master_auth.0.cluster_ca_certificate
  sensitive = true
}

output "host" {
  value     = google_container_cluster.primary.endpoint
  sensitive = true
}

output "instance_group_urls" {
  value = google_container_cluster.primary.instance_group_urls
}

output "master_username" {
  value     = google_container_cluster.primary.master_auth.0.username
  sensitive = true
}

output "master_password" {
  value     = google_container_cluster.primary.master_auth.0.password
  sensitive = true
}

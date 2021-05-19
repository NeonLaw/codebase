resource "random_string" "random" {
  length  = 16
  special = false
}

resource "random_password" "password" {
  length           = 16
  special          = true
  override_special = "_"
}

resource "google_container_cluster" "primary" {
  provider   = google-beta
  name       = "neon-law-${var.environment}"
  location   = var.region
  network    = "projects/${var.project_id}/global/networks/default"
  subnetwork = "default"

  master_auth {
    client_certificate_config {
      issue_client_certificate = true
    }
  }

  ip_allocation_policy {
    cluster_ipv4_cidr_block  = ""
    services_ipv4_cidr_block = ""
  }

  enable_autopilot = true
}

resource "google_sql_database_instance" "postgres" {
  name             = "neon-law"
  region           = var.region
  database_version = var.postgres_version

  settings {
    tier = "db-f1-micro"

    ip_configuration {
      ipv4_enabled    = var.environment == "production" ? true : false
      authorized_networks {
        name = "Segment"
        value = "52.25.130.38/32"
      }
      require_ssl     = false
      private_network = "projects/${var.project_id}/global/networks/default"
    }
  }
}

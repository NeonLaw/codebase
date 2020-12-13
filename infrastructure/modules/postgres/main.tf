resource "google_sql_database_instance" "postgres" {
  name             = "neon-law"
  region           = var.region
  database_version = var.postgres_version

  settings {
    tier = "db-f1-micro"

    ip_configuration {
      ipv4_enabled    = true
      authorized_networks {
        name = "Segment Whitelisted IP"
        value = "52.25.130.38/32"
      }
      private_network = "projects/${var.project_id}/global/networks/default"
    }

    backup_configuration {
      enabled = var.environment == "production" ? true : false
    }
  }
}

resource "random_string" "password" {
  length = 16
  special = false
}

resource "google_sql_user" "neon_law_admin" {
  name     = "neon_law_admin"
  instance = google_sql_database_instance.postgres.name
  password = random_string.password.result
}

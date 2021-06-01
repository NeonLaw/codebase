resource "google_secret_manager_secret" "emails" {
  secret_id = "emails"

  labels = {
    environment = var.environment
  }
}

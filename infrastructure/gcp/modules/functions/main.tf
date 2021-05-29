resource "google_storage_bucket" "function_bucket" {
  name          = var.bucket_name
  location      = "US"
  force_destroy = true

  uniform_bucket_level_access = false

  versioning {
    enabled = true
  }
}

resource "google_cloudfunctions_function" "welcome_email" {
  name = "welcome-email-${var.schema_version}"
  description = "A function for sending out emails"
  runtime     = "ruby27"

  available_memory_mb   = 128
  source_archive_bucket = google_storage_bucket.function_bucket.name
  source_archive_object = "emails-${var.emails_version}"
  trigger_http          = false
  event_trigger = {
    event_type = "google.pub_sub.topic"
    resource = "projects/${var.project_id}/topics/welcome-email-${var.schema_version}"
  }
  timeout               = 60
  entry_point           = "lib.neon_email"

  labels = {
    environment = var.environment
  }

  environment_variables = {
    ENVIRONMENT = var.environment
  }
}

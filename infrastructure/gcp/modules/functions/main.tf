resource "google_cloudfunctions_function" "welcome_email" {
  name        = "welcome-email-${var.color}"
  description = "Send Welcome Email"
  runtime     = "ruby27"

  available_memory_mb   = 256
  source_archive_bucket = var.source_archive_bucket
  source_archive_object = var.email_source_archive_object
  entry_point           = "com.neon_law.outbound_email.welcome_email"

  event_trigger {
    event_type = "google.pubsub.topic.publish"
    resource = "projects/${var.project_id}/topics/welcome-email-${var.schema_version}"

    failure_policy {
      retry = false
    }
  }
}

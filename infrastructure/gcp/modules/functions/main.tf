resource "google_cloudfunctions_function" "function" {
  name        = "welcome-email"
  description = "Send Welcome Email"
  runtime     = "ruby27"

  available_memory_mb   = 128
  source_archive_bucket = var.source_archive_bucket
  source_archive_object = var.source_archive_object
  entry_point           = "emails/handlers/welcome_email_handler"
}

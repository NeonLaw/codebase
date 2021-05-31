data "http" "schema" {
  url = var.raw_github_schema_url
}

resource "google_pubsub_schema" "main" {
  name = "welcome-email-${var.schema_version}"
  type = "AVRO"
  definition = data.http.schema.body
}

resource "google_pubsub_topic" "main" {
  name = "welcome-email-${var.schema_version}"

  depends_on = [google_pubsub_schema.welcome_email]
  schema_settings {
    schema = "projects/${var.project_id}/schemas/welcome-email-${var.schema_version}"
    encoding = "JSON"
  }
}

resource "google_cloudfunctions_function" "welcome_email" {
  name = "welcome-email"
  description = "A function for sending out emails"
  runtime     = "ruby27"

  available_memory_mb   = 128
  source_archive_bucket = google_storage_bucket.function_bucket.name
  source_archive_object = "emails-${var.emails_version}"
  event_trigger {
    event_type = "google.pubsub.topic.publish"
    resource = "projects/${var.project_id}/topics/welcome-email-${var.schema_version}"
  }
  timeout      = 60
  entry_point  = "lib/neon_emails/handler"

  labels = {
    environment = var.environment
  }

  environment_variables = {
    ENVIRONMENT = var.environment
  }
}

data "http" "welcome_email" {
  url = "https://raw.githubusercontent.com/NeonLaw/codebase/neon_schemas%40${var.schema_version}/schemas/outbound_emails/welcome_email.avsc"
}

resource "google_pubsub_schema" "welcome_email" {
  name       = "welcome-email-${var.schema_version}"
  type       = "AVRO"
  definition = data.http.welcome_email.body
}

resource "google_pubsub_topic" "welcome_email" {
  name = "welcome-email-${var.schema_version}"

  depends_on = [google_pubsub_schema.welcome_email]
  schema_settings {
    schema   = "projects/${var.project_id}/schemas/welcome-email-${var.schema_version}"
    encoding = "JSON"
  }
}

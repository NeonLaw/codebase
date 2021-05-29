data "http" "welcome_email" {
  url = "https://github.com/NeonLaw/codebase/blob/neon_schemas%40${var.environment}/schemas/src/outbound_email.avsc"
}

resource "google_pubsub_schema" "welcome_email" {
  name = "welcome-email-${var.version}"
  type = "AVRO"
  definition = http.welcome_email.outputs.body
}

resource "google_pubsub_topic" "welcome_email" {
  name = "welcome-email-${var.version}"

  depends_on = [google_pubsub_schema.welcome_email]
  schema_settings {
    schema = "projects/my-project-name/schemas/welcome-email-${var.version}"
    encoding = "JSON"
  }
}

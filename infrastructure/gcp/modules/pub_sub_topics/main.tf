data "http" "welcome_email" {
  url = "https://raw.githubusercontent.com/NeonLaw/codebase/neon_schemas%40${var.schema_version}/schemas/src/outbound_email.avsc"
}

resource "google_pubsub_schema" "welcome_email" {
  name = "welcome-email-${var.schema_version}"
  type = "AVRO"
  definition = data.http.welcome_email.body
}

resource "google_pubsub_topic" "welcome_email" {
  name = "welcome-email-${var.schema_version}"

  depends_on = [google_pubsub_schema.welcome_email]
  schema_settings {
    schema = "projects/my-project-name/schemas/welcome-email-${var.schema_version}"
    encoding = "JSON"
  }
}

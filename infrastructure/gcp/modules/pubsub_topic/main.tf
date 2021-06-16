data "http" "schema_definition" {
  url = "https://raw.githubusercontent.com/NeonLaw/codebase/schemas%40${var.schema_version}/schemas/schemas/${var.topic_name}.avsc"
}

resource "google_pubsub_schema" "main" {
  name       = "${var.topic_name}-${var.schema_version}"
  type       = "AVRO"
  definition = data.http.welcome_email.body
}

resource "google_pubsub_topic" "main" {
  name = "${var.topic_name}-${var.schema_version}"

  depends_on = [google_pubsub_schema.main]
  schema_settings {
    schema   = "projects/${var.project_id}/schemas/${var.topic_name}-${var.schema_version}"
    encoding = "JSON"
  }
}

data "http" "schema_definition" {
  url = "https://raw.githubusercontent.com/NeonLaw/codebase/schemas%40${var.schema_version}/schemas/schemas/${replace(var.topic_name, ".", "/")}.avsc"
}

resource "google_pubsub_schema" "main" {
  name       = "${replace(var.topic_name, ".", "-")}-${var.schema_version}"
  type       = "AVRO"
  definition = data.http.schema_definition.body
}

resource "google_pubsub_topic" "main" {
  name  = "${replace(var.topic_name, ".", "-")}-${var.schema_version}"

  depends_on = [google_pubsub_schema.main]
  schema_settings {
    schema   = "projects/${var.project_id}/schemas/${replace(var.topic_name, ".", "-")}-${var.schema_version}"
    encoding = "JSON"
  }
}

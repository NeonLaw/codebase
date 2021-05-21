resource "google_pubsub_topic" "outbound_email" {
  name = "outbound-email"
}

resource "google_pubsub_subscription" "outbound_email" {
  name = "outbound-email"
  topic = google_pubsub_topic.example.name

  ack_deadline_seconds = 20

  labels = {
    environment = var.environment
  }
}

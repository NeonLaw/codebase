resource "google_cloudfunctions_function" "welcome_email" {
  name        = "welcome-email-${var.color}"
  description = "Send Welcome Email"
  runtime     = "ruby27"

  available_memory_mb   = 256
  source_archive_bucket = var.source_archive_bucket
  source_archive_object = var.email_source_archive_object
  entry_point           = "outbound_emails.welcome_email"

  event_trigger {
    event_type = "google.pubsub.topic.publish"
    resource   = "projects/${var.project_id}/topics/outbound-emails-welcome-email-${var.schema_version}"

    failure_policy {
      retry = false
    }
  }

  environment_variables = {
    NEON_ENV = var.environment
  }
}

resource "google_cloudfunctions_function" "send_slack_message" {
  name        = "welcome-email-${var.color}"
  description = "Send Slack Message"
  runtime     = "ruby27"

  available_memory_mb   = 256
  source_archive_bucket = var.source_archive_bucket
  source_archive_object = var.email_source_archive_object
  entry_point           = "slack.send_message"

  event_trigger {
    event_type = "google.pubsub.topic.publish"
    resource   = "projects/${var.project_id}/topics/slack-send-message-${var.schema_version}"

    failure_policy {
      retry = false
    }
  }

  max_instances = 1

  environment_variables = {
    NEON_ENV = var.environment
  }
}

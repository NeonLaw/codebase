module "pubsub_topics" {
  for_each = toset([
    "authentication.successful_login",
    "documents.process_document",
    "outbound_emails.welcome_email",
    "slack.send_message",
  ])

  source         = "../pubsub_topic"
  environment    = var.environment
  schema_version = var.schema_version
  project_id     = var.project_id
  topic_name     = each.key
}

output "staging_server_version" {
  value = data.null_data_source.versions.outputs.staging_server
}

output "staging_webhooks_version" {
  value = data.null_data_source.versions.outputs.staging_webhooks
}

output "staging_web_version" {
  value = data.null_data_source.versions.outputs.staging_web
}

output "staging_green_schemas" {
  value = data.null_data_source.versions.outputs.staging_green_schemas
}

output "staging_blue_schemas" {
  value = data.null_data_source.versions.outputs.staging_blue_schemas
}

output "staging_green_emails" {
  value = data.null_data_source.versions.outputs.staging_green_emails
}

output "staging_blue_emails" {
  value = data.null_data_source.versions.outputs.staging_blue_emails
}

output "production_server_version" {
  value = data.null_data_source.versions.outputs.production_server
}

output "production_webhooks_version" {
  value = data.null_data_source.versions.outputs.production_webhooks
}

output "production_web_version" {
  value = data.null_data_source.versions.outputs.production_web
}

output "production_green_schemas" {
  value = data.null_data_source.versions.outputs.production_green_schemas
}

output "production_blue_schemas" {
  value = data.null_data_source.versions.outputs.production_blue_schemas
}
output "production_green_emails" {
  value = data.null_data_source.versions.outputs.production_green_emails
}

output "production_blue_emails" {
  value = data.null_data_source.versions.outputs.production_blue_emails
}

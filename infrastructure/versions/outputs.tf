output "staging_green_schemas" {
  value = data.null_data_source.versions.outputs.staging_green_schemas
}

output "staging_blue_schemas" {
  value = data.null_data_source.versions.outputs.staging_green_schemas
}

output "production_green_schemas" {
  value = data.null_data_source.versions.outputs.production_green_schemas
}

output "production_blue_schemas" {
  value = data.null_data_source.versions.outputs.production_green_schemas
}

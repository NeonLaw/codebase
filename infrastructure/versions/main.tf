data "null_data_source" "versions" {
  inputs = {
    staging_green_schemas = "0.1.1"
    staging_green_emails = "0.1.3"

    staging_blue_schemas = "0.1.0"
    staging_blue_emails = "0.1.3"

    production_green_schemas = "0.1.1"
    production_green_emails = "0.1.3"

    production_blue_schemas = "0.1.0"
    production_blue_emails = "0.1.3"
  }
}

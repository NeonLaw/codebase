data "null_data_source" "versions" {
  inputs = {
    # Staging Versions
    staging_server   = "0.1.3"
    staging_webhooks = "0.1.0"
    staging_web      = "0.1.1"

    staging_green_schemas = "0.1.13"
    staging_green_emails  = "0.1.7"

    staging_blue_schemas = "0.1.11"
    staging_blue_emails  = "0.1.6"

    # Production Versions
    production_server   = "0.1.3"
    production_webhooks = "0.1.0"
    production_web      = "0.1.1"

    production_green_schemas = "0.1.13"
    production_green_emails  = "0.1.7"

    production_blue_schemas = "0.1.11"
    production_blue_emails  = "0.1.6"
  }
}

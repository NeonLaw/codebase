data "null_data_source" "versions" {
  inputs = {
    staging_green_schemas = "0.1.1"

    staging_blue_schemas = "0.1.0"

    production_green_schemas = "0.1.1"

    production_blue_schemas = "0.1.0"
  }
}

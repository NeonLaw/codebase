data "null_data_source" "versions" {
  inputs = {
    staging_green = {
      schemas = "0.1.1"
    }
    staging_blue = {
      schemas = "0.1.1"
    }
    production_green = {
      schemas = "0.1.1"
    }
    production_blue = {
      schemas = "0.1.1"
    }
  }
}

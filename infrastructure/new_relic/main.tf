provider "newrelic" {
  account_id = var.new_relic_account_id
  api_key = var.new_relic_api_key
  region = "US"
}

resource "newrelic_synthetics_monitor" "production_index" {
  name = "Production Interface"
  type = "SIMPLE"
  frequency = 5
  status = "ENABLED"
  locations = ["AWS_US_EAST_1", "AWS_US_EAST_2", "AWS_US_WEST_1"]

  uri                       = "https://www.neonlaw.com"
  validation_string         = "Neon Law"
  verify_ssl                = true
}

resource "newrelic_synthetics_monitor" "production_api" {
  name = "Production API"
  type = "SIMPLE"
  frequency = 5
  status = "ENABLED"
  locations = ["AWS_US_EAST_1", "AWS_US_EAST_2", "AWS_US_WEST_1"]

  uri                       = "https://www.neonlaw.com/api"
  validation_string         = "Neon Law API"
  verify_ssl                = true
}

resource "newrelic_synthetics_monitor" "staging_index" {
  name = "Staging Interface"
  type = "SIMPLE"
  frequency = 5
  status = "ENABLED"
  locations = ["AWS_US_EAST_1", "AWS_US_EAST_2", "AWS_US_WEST_1"]

  uri                       = "https://www.neonlaw.net"
  validation_string         = "Neon Law"
  verify_ssl                = true
}

resource "newrelic_synthetics_monitor" "staging_api" {
  name = "Staging API"
  type = "SIMPLE"
  frequency = 5
  status = "ENABLED"
  locations = ["AWS_US_EAST_1", "AWS_US_EAST_2", "AWS_US_WEST_1"]

  uri                       = "https://www.neonlaw.net/api/graphiql"
  validation_string         = "Neon Law API"
  verify_ssl                = true
}

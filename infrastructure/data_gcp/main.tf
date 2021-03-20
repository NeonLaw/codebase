provider "google" {
  project = var.project_id
  region  = var.region
  zone    = var.zone

  credentials = var.gcp_credentials
}

provider "google-beta" {
  project = var.project_id
  region  = var.region
  zone    = var.zone

  credentials = var.gcp_credentials
}

resource "google_bigquery_dataset" "software" {
  dataset_id                  = "software"
  friendly_name               = "software"
  description                 = "This is a sink for software logs."
  location                    = "US"
  default_table_expiration_ms = 31622400000

  labels = {
    env = "data"
  }
}

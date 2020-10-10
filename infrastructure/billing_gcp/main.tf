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

data "google_billing_account" "account" {
  open = true
  display_name = "Neon Law"
}

resource "google_billing_budget" "budget" {
  provider = google-beta
  billing_account = data.google_billing_account.account.id
  display_name = "Total GCP Spend"
  amount {
    specified_amount {
      currency_code = "USD"
      units = var.total_budget
    }
  }
  threshold_rules {
      threshold_percent =  0.5
  }
}

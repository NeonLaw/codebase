resource "google_service_account" "application_user_account" {
  account_id   = var.account_id
  display_name = "Application User"
}

resource "google_service_account_key" "application_user_accunt_key" {
  service_account_id = google_service_account.application_user_account.name
}

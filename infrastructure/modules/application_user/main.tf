resource "google_service_account" "application_user_account" {
  account_id   = "myaccount"
  display_name = "My Service Account"
}

resource "google_service_account_key" "application_user_accunt_key" {
  service_account_id = google_service_account.application_user_accunt.name
}

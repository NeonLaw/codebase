resource "google_service_account" "user_account" {
  account_id   = "transloadit-user"
  display_name = "Transloadit User"
  description  = "GCP Credentials used for Transloadit"
}

resource "google_service_account_key" "user_account_key" {
  service_account_id = google_service_account.user_account.name
}

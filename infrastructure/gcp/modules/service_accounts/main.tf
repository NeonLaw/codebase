resource "google_service_account" "application_user_account" {
  account_id   = "application-user"
  display_name = "Application User"
  description  = "GCP Credentials used in Kubernetes apps"
}

resource "google_service_account_key" "application_user_account_key" {
  service_account_id = google_service_account.application_user_account.name
}

resource "google_service_account_iam_binding" "nick_iam_binding" {
  service_account_id = google_service_account.application_user_account.name
  role               = "roles/iam.serviceAccountUser"

  members = [
    "user:nick@neonlaw.com",
  ]
}

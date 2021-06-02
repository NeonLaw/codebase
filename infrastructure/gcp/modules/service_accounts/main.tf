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
    "serviceAccount:terraform@${var.project_id}.iam.gserviceaccount.com",
  ]
}

resource "google_project_iam_binding" "editor_bindings" {
  project = var.project_id
  role    = "roles/editor"

  members = [
    "serviceAccount:application-user@${var.project_id}.iam.gserviceaccount.com",
    "serviceAccount:terraform@${var.project_id}.iam.gserviceaccount.com",
    "serviceAccount:${var.project_number}-compute@developer.gserviceaccount.com"
  ]
}

resource "google_project_iam_binding" "kubernetes_admin_bindings" {
  project = var.project_id
  role    = "roles/container.admin"

  members = [
    "serviceAccount:application-user@${var.project_id}.iam.gserviceaccount.com",
    "serviceAccount:terraform@${var.project_id}.iam.gserviceaccount.com",
    "serviceAccount:${var.project_number}-compute@developer.gserviceaccount.com"
  ]
}

resource "google_project_iam_binding" "compute_admin_bindings" {
  project = var.project_id
  role    = "roles/compute.admin"

  members = [
    "serviceAccount:${var.project_number}-compute@developer.gserviceaccount.com",
    "serviceAccount:${var.project_number}@cloudservices.gserviceaccount.com"
  ]
}

resource "google_project_iam_binding" "service_account_user_bindings" {
  project = var.project_id
  role    = "roles/iam.serviceAccountUser"

  members = [
    "serviceAccount:application-user@${var.project_id}.iam.gserviceaccount.com",
  ]
}

resource "google_storage_bucket" "write_only_bucket" {
  name          = var.bucket_name
  location      = "US"
  force_destroy = true

  uniform_bucket_level_access = true

  versioning {
    enabled = true
  }

  cors {
    origin          = var.allowed_origins
    method          = ["GET", "POST"]
    response_header = ["*"]
    max_age_seconds = 3600
  }
}

resource "google_service_account" "write_only_bucket_user_account" {
  account_id   = "upload-bucket-service-account"
  display_name = "Service account for writing to the Upload bucket"
  description  = "A service account with write-only permissions to the upload bucket"
}

resource "google_service_account_key" "write_only_bucket_user_account_key" {
  service_account_id = google_service_account.write_only_bucket_user_account.name
}

resource "google_service_account_iam_binding" "nick_iam_binding" {
  service_account_id = google_service_account.write_only_bucket_user_account.name
  role               = "roles/iam.serviceAccountUser"

  members = [
    "user:nick@neonlaw.com",
  ]
}

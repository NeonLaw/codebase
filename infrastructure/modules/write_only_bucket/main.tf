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
  account_id   = "upload-bucket-user"
  display_name = "Write Only Access User"
}

resource "google_service_account_key" "write_only_bucket_user_accunt_key" {
  service_account_id = google_service_account.write_only_bucket_user_account.name
}

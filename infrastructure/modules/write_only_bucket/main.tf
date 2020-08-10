resource "google_storage_bucket" "write_only_bucket" {
  name          = var.bucket_name
  location      = "US"
  force_destroy = true

  bucket_policy_only = true

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

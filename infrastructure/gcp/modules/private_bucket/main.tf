resource "google_storage_bucket" "private_bucket" {
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

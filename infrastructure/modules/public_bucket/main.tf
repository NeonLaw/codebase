resource "google_storage_bucket" "static-site" {
  name          = var.bucket_name
  location      = "US"
  force_destroy = true

  bucket_policy_only = true

  versioning {
    enabled = true
  }

  cors {
    origin          = var.allowed_origins
    method          = ["GET", "HEAD"]
    response_header = ["*"]
    max_age_seconds = 3600
  }
}

resource "google_storage_default_object_access_control" "public_rule" {
  bucket = var.bucket_name
  role   = "READER"
  entity = "allUsers"
}

resource "google_storage_bucket" "public_bucket" {
  name          = var.bucket_name
  location      = "US"
  force_destroy = true

  uniform_bucket_level_access = true

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

resource "google_storage_bucket" "static-site" {
  name          = "${var.bucket_name}-old"
  location      = "US"
  force_destroy = true

  uniform_bucket_level_access = true

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

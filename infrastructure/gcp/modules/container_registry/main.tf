resource "google_container_registry" "registry" {
  project  = var.project_id
  location = "US"
}

resource "google_storage_bucket_iam_member" "viewer" {
  bucket = google_container_registry.registry.id
  role   = "roles/storage.objectViewer"
  member = "user:${var.admin_user}"
}

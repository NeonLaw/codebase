resource "google_compute_managed_ssl_certificate" "primary" {
  provider = google-beta

  name = var.certificate_name

  managed {
    domains = [var.domain_name]
  }
}

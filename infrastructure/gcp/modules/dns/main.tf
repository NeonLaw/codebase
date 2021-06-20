resource "google_dns_managed_zone" "neon_law" {
  name        = "neon-law"
  dns_name    = "${var.neon_law_url}."
  description = "Neon Law DNS"
}

resource "google_dns_managed_zone" "delete_your_data" {
  name        = "delete-your-data"
  dns_name    = "${var.delete_your_data_url}."
  description = "Delete Your Data DNS"
}

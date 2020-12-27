output "gcp_credential_key" {
  value = google_service_account_key.write_only_bucket_user_accunt_key.private_key
}

output "application_user_account_key" {
  value = google_service_account_key.application_user_account_key.private_key
}

output "github_actions_account_key" {
  value = google_service_account_key.github_actions_account_key.private_key
}

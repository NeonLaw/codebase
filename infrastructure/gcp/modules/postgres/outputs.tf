output "name" {
  value = google_sql_database_instance.postgres.name
}

output "admin_password" {
  value = random_string.password.result
  sensitive = true
}

output "admin_username" {
  value = "neon_law_admin"
  sensitive = true
}

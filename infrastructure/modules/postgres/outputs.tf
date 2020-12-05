output "name" {
  value = google_sql_database_instance.postgres.name
}

output "segment_password" {
  value = random_string.password
  sensitive = true
}

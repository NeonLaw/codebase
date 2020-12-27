output "name" {
  value = "${lower(google_container_registry.registry.location)}.gcr.io/${google_container_registry.registry.project}"
}

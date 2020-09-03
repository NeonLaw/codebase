output "name" {
  value = kubernetes_secret.primary.metadata[0].name
}

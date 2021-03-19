resource "kubernetes_secret" "primary" {
  metadata {
    name = var.secret_name
  }

  data = {
    "credentials.json" = var.secret_value
  }
}

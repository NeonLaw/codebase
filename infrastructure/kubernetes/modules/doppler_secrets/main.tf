resource "kubernetes_secret" "doppler_secrets" {
  metadata {
    name = "web-secrets"
  }

  data = {
    "DOPPLER_TOKEN" = var.web_doppler_token
  }
}

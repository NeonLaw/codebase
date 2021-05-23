resource "kubernetes_secret" "doppler_secrets" {
  metadata {
    name = "doppler-secrets"
  }

  data = {
    "EMAIL_TOKEN" = var.email_doppler_token
  }
}

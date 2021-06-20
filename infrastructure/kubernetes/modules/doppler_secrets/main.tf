resource "kubernetes_secret" "doppler_secrets" {
  metadata {
    name = var.secret_name
  }

  data = {
    "DOPPLER_TOKEN" = var.web_doppler_token
  }
}

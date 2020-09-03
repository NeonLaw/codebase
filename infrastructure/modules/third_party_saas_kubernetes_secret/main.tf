resource "kubernetes_secret" "primary" {
  metadata {
    name = var.secret_name
  }

  data = {
    "AUTH0_CLIENT_ID"     = var.auth0_client_id
    "AUTH0_CLIENT_SECRET" = var.auth0_client_secret
    "AUTH0_TENANT"        = var.auth0_tenant
  }
}

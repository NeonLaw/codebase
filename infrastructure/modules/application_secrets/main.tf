resource "kubernetes_secret" "application_secrets" {
  metadata {
    name = "application-secrets"
  }

  data = {
    "AUTH0_CLIENT_ID"             = var.auth0_client_id
    "AUTH0_CLIENT_SECRET"         = var.auth0_client_secret
    "AUTH0_TENANT"                = var.auth0_tenant
    "NEW_RELIC_LICENSE_KEY"       = var.new_relic_license_key
    "NEW_RELIC_APP_NAME"          = var.new_relic_app_name
    "API_URL"                     = var.api_url
    "TRANSLOADIT_KEY"             = var.transloadit_key
    "TRANSLOADIT_SECRET"          = var.transloadit_secret
    "TRANSLOADIT_PDF_TEMPLATE_ID" = var.transloadit_pdf_template_id
    "SENDGRID_API_KEY"            = var.sendgrid_api_key
    "LOB_API_KEY"                 = var.lob_api_key
  }
}

resource "kubernetes_secret" "application_secrets" {
  metadata {
    name = "application-secrets"
  }

  data = {
    "AUTH0_CLIENT_ID"               = var.auth0_client_id
    "AUTH0_CLIENT_SECRET"           = var.auth0_client_secret
    "AUTH0_TENANT"                  = var.auth0_tenant
    "API_URL"                       = var.api_url
    "ENVIRONMENT"                   = var.environment
    "NEW_RELIC_LICENSE_KEY"         = var.new_relic_license_key
    "API_URL"                       = var.api_url
    "TRANSLOADIT_KEY"               = var.transloadit_key
    "TRANSLOADIT_SECRET"            = var.transloadit_secret
    "TRANSLOADIT_IMAGE_TEMPLATE_ID" = var.transloadit_image_template_id
    "TRANSLOADIT_PDF_TEMPLATE_ID"   = var.transloadit_pdf_template_id
    "SENDGRID_API_KEY"              = var.sendgrid_api_key
    "LOB_API_KEY"                   = var.lob_api_key
    "LOB_API_SECRET"                = var.lob_api_secret
    "STRIPE_API_PUBLISHABLE_KEY"    = var.stripe_api_publishable_key
    "STRIPE_API_SECRET_KEY"         = var.stripe_api_secret_key
  }
}

resource "kubernetes_secret" "application_secrets" {
  metadata {
    name = "application-secrets"
  }

  data = {
    "API_URL"                    = var.api_url
    "API_URL"                    = var.api_url
    "AUTH0_CLIENT_ID"            = var.auth0_client_id
    "AUTH0_CLIENT_SECRET"        = var.auth0_client_secret
    "AUTH0_TENANT"               = var.auth0_tenant
    "ENVIRONMENT"                = var.environment
    "HCAPTCHA_SECRET_KEY"        = var.hcaptcha_secret_key
    "LOB_API_KEY"                = var.lob_api_key
    "LOB_API_SECRET"             = var.lob_api_secret
    "NEO4J_URL"                  = var.neo4j_url
    "NEON_BOT_SLACK_TOKEN"       = var.neon_bot_slack_token
    "SENDGRID_API_KEY"           = var.sendgrid_api_key
    "STRIPE_API_PUBLISHABLE_KEY" = var.stripe_api_publishable_key
    "STRIPE_API_SECRET_KEY"      = var.stripe_api_secret_key
    "TRANSLOADIT_KEY"            = var.transloadit_key
    "TRANSLOADIT_TEMPLATE_ID"    = var.transloadit_template_id
    "TRANSLOADIT_SECRET"         = var.transloadit_secret
  }
}

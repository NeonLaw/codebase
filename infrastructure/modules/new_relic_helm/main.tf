resource "helm_release" "new_relic" {
  name       = "new-relic-${var.environment}"
  repository = "https://helm-charts.newrelic.com"
  chart      = "nri-bundle"
  version    = "1.9.1"

  set {
    name  = "cluster"
    value = "neon-law"
  }

  set {
    name  = "config.custom_attributes.cluster"
    value = "neon-law"
  }

  set {
    name  = "licenseKey"
    value = var.new_relic_license_key
  }

  set {
    name  = "logging.enabled"
    value = true
  }
}

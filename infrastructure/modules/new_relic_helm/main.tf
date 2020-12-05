resource "helm_release" "new_relic" {
  name       = var.environment
  repository = "https://helm-charts.newrelic.com"
  chart      = "newrelic/nri-bundle"
  version    = "1.9.1"
  namespace  = "default"

  set {
    name  = "global.cluster"
    value = "neon-law"
  }

  set {
    name  = "config.custom_attributes.cluster"
    value = "neon-law"
  }

  set {
    name  = "global.licenseKey"
    value = var.new_relic_license_key
  }

  set {
    name  = "logging.enabled"
    value = true
  }

  set {
    name  = "prometheus.enabled"
    value = true
  }

  set {
    name  = "ksm.enabled"
    value = true
  }
}

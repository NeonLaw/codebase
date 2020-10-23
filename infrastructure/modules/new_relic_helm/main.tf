resource "helm_release" "new_relic" {
  name       = "new-relic-${var.environment}"
  repository = "https://helm-charts.newrelic.com"
  chart      = "newrelic/newrelic-infrastructure"

  set {
    name  = "cluster"
    value = var.kubernetes_cluster_name
  }

  set {
    name  = "config.custom_attributes.cluster"
    value = var.kubernetes_cluster_name
  }

  set {
    name  = "licenseKey"
    value = var.new_relic_license_key
  }
}

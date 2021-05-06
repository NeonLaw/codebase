locals {
  superset_helm_chart_values = {
    ingress = {
      enabled = true
      annotations = {
        "kubernetes.io/ingress.class"                 = "nginx"
        "kubernetes.io/ingress.global-static-ip-name" = "neon-law"
        "kubernetes.io/ingress.allow-http"            = "false"
        "ingress.gcp.kubernetes.io/pre-shared-cert"   = "neon-law-superset"
      }

      hosts = var.environment == "production" ? ["superset.neonlaw.com"] : ["superset.neonlaw.net"]
    }

    additionalRequirements = [
      "pybigquery",
      "elasticsearch-dbapi",
      "psycopg2"
    ]
  }
}

resource "helm_release" "superset" {
  name       = "${var.environment}-superset"
  repository = "https://apache.github.io/superset"
  chart      = "superset"
  verify     = false

  values = [
    yamlencode(local.superset_helm_chart_values)
  ]
}

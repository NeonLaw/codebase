resource "helm_release" "superset" {
  name       = "${var.environment}-superset"
  repository = "https://apache.github.io/superset"
  chart      = "superset"
  verify     = false

  set {
    name  = "ingress.enabled"
    value = "true"
  }

  set {
    name = "ingress.annotations"
    value = {
      "kubernetes.io/ingress.global-static-ip-name" = "neon-law"
      "ingress.gcp.kubernetes.io/pre-shared-cert"   = "neon-law-superset"
    }
  }
}

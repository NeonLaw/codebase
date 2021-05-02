resource "helm_release" "superset" {
  name       = "${var.environment}-superset"
  repository = "https://apache.github.io/superset"
  chart      = "superset"
  verify     = false
}

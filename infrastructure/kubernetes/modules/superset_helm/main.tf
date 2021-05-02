resource "helm_release" "superset" {
  name   = "${var.environment}-superset"
  chart  = "https://raw.githubusercontent.com/preset-io/superset/master/helm/superset/Chart.yaml"
  verify = false
}

resource "helm_release" "kafka" {
  name       = "${var.environment}-kafka"
  repository = "https://confluentinc.github.io/cp-helm-charts"
  chart      = "cp-helm-charts"
  version    = "0.6.0"
}

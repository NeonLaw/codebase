resource "helm_release" "kafka" {
  name       = "${var.environment}-kafka"
  repository = "https://confluentinc.github.io/cp-helm-charts"
  chart      = "confluentinc/cp-helm-charts"
  version    = "6.0.1"
}

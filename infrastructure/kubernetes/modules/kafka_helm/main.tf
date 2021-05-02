resource "helm_release" "confluent-cloud" {
  name  = "${var.environment}-kafka"
  chart = "https://github.com/confluentinc/cp-helm-charts/releases/download/v6.0.1-1/cp-helm-charts-0.6.0.tgz"
}

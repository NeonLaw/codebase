resource "helm_release" "fluentbit" {
  name  = "${var.environment}-fluentbit"
  chart = "https://github.com/fluent/helm-charts/releases/download/fluent-bit-0.15.1/fluent-bit-0.15.1.tgz"
}

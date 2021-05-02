resource "helm_release" "neo4j" {
  name  = "${var.environment}-kafka"
  chart = "bitnami/kafka"
}

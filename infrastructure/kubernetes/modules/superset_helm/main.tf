resource "helm_release" "superset" {
  name       = "${var.environment}-superset"
  repository = "https://apache.github.io/superset"
  chart      = "superset"
  verify     = false

  set {
    name  = "additionalRequirements"
    value = jsonencode(["psycopg2", "elasticsearch-dbapi", "Authlib", "gevent"])
  }
}

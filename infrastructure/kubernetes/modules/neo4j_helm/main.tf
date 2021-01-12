resource "helm_release" "neo4j" {
  name   = "${var.environment}-neo4j"
  chart  = "https://github.com/neo4j-contrib/neo4j-helm/releases/download/4.2.0-1/neo4j-4.2.0-1.tgz"
  verify = false

  set {
    name  = "acceptLicenseAgreement"
    value = "yes"
  }

  set {
    name  = "neo4jPassword"
    value = "graphs"
  }
}

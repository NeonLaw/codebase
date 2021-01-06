resource "helm_release" "redis" {
  name       = var.environment
  repository = "https://charts.bitnami.com/bitnami"
  chart      = "redis"
  version    = "12.3.2"
  namespace  = "default"

  set {
    name  = "usePassword"
    value = false
  }
}

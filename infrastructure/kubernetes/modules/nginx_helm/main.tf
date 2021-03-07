resource "helm_release" "nginx" {
  name       = "${var.environment}-nginx"
  repository = "https://kubernetes.github.io/ingress-nginx"
  chart      = "ingress-nginx"
  version    = "3.23.0"
  namespace  = "default"

  set {
    name  = "rbac.create"
    value = "true"
    type  = "string"
  }

  set {
    name  = "controller.service.type"
    value = "LoadBalancer"
    type  = "string"
  }

  set {
    name  = "controller.publishService.enabled"
    value = "true"
    type  = "string"
  }

  set {
    name  = "defaultBackend.nodeSelector\\.beta\\.kubernetes\\.io/os"
    value = "linux"
    type  = "string"
  }
}

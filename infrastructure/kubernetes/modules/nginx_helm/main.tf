locals {
  nginx_helm_chart_values = {
    rbac = {
      create = true
    }

    controller = {
      publishService = {
        enabled = true
      }
      service = {
        type = "LoadBalancer"
      }
    }
  }
}

resource "helm_release" "nginx" {
  name       = "${var.environment}-nginx"
  repository = "https://kubernetes.github.io/ingress-nginx"
  chart      = "ingress-nginx"
  version    = "3.23.0"
  namespace  = "default"

  values = [
    yamlencode(local.nginx_helm_chart_values)
  ]

  set {
    name  = "defaultBackend.nodeSelector\\.beta\\.kubernetes\\.io/os"
    value = "linux"
    type  = "string"
  }
}

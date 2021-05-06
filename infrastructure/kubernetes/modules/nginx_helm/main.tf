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
        # Add the IP Address of the globally created IP
        loadBalancerIp = "34.107.230.13"
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

resource "kubernetes_config_map" "nginx" {
  metadata {
    name = "nginx-configuration"
    labels = {
      "app.kubernetes.io/name"    = "ingress-nginx"
      "app.kubernetes.io/part-of" = "ingress-nginx"
    }
  }

  data = {
    "upstream-keepalive-timeouts" = "650"
    "upstream-keepalive-requests" = "1000000"
  }
}

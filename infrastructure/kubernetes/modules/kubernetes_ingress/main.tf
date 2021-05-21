resource "kubernetes_ingress" "primary" {
  metadata {
    name = "${var.environment}-ingress"

    annotations = {
      "kubernetes.io/ingress.allow-http"            = "false"
      "kubernetes.io/ingress.global-static-ip-name" = "neon-law"
      "ingress.gcp.kubernetes.io/pre-shared-cert"   = "neon-law-api"
    }
  }

  spec {
    backend {
      service_name = "${var.environment}-api"
      service_port = 80
    }

    rule {
      host = var.environment == "production" ? "api.neonlaw.com" : "api.neonlaw.net"
      http {
        path {
          backend {
            service_name = "${var.environment}-api"
            service_port = 80
          }
        }
      }
    }

    rule {
      host = var.environment == "production" ? "webhooks.neonlaw.com" : "webhooks.neonlaw.net"
      http {
        path {
          backend {
            service_name = "${var.environment}-webhooks"
            service_port = 80
          }
        }
      }
    }
  }
}

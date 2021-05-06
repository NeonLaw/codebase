resource "kubernetes_ingress" "primary" {
  metadata {
    name = "${var.environment}-ingress"

    annotations = {
      "kubernetes.io/ingress.allow-http"            = "false"
      "kubernetes.io/ingress.class"                 = "nginx"
      "kubernetes.io/ingress.global-static-ip-name" = "neon-law"
      "ingress.gcp.kubernetes.io/pre-shared-cert"   = "neon-law-api,neon-law-superset,neon-law-kafka"
    }
  }

  spec {
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
      host = var.environment == "production" ? "kafka.neonlaw.com" : "kafka.neonlaw.net"
      http {
        path {
          backend {
            service_name = "${var.environment}-kafka-cp-control-center"
            service_port = 9021
          }
        }
      }
    }
  }
}

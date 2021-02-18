resource "kubernetes_ingress" "primary" {
  metadata {
    name = "ingress"

    annotations = {
      "kubernetes.io/ingress.global-static-ip-name" = "neon-law"
      "ingress.gcp.kubernetes.io/pre-shared-cert"   = "neon-law,neon-law-api,law-job-resources"
    }
  }

  spec {
    rule {
      host = var.environment == "production" ? "www.neonlaw.com" : "www.neonlaw.net"
      http {
        path {
          backend {
            service_name = "${var.environment}-interface"
            service_port = 80
          }
        }
      }
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
  }
}

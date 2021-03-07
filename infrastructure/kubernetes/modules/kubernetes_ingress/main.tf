resource "kubernetes_ingress" "primary" {
  metadata {
    name = "ingress"

    annotations = {
      "kubernetes.io/ingress.global-static-ip-name" = "neon-law"
      "ingress.gcp.kubernetes.io/pre-shared-cert"   = var.environment == "production" ? "neon-law,neon-law-api,delete-your-data,delete-their-data,justice-for-rickie-slaughter,shook-family" : "neon-law,neon-law-api"
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

    rule {
      host = var.environment == "production" ? "www.deleteyourdata.com" : "deleteyourdata.neonlaw.net"
      http {
        path {
          backend {
            service_name = "production-interface"
            service_port = 80
          }
        }
      }
    }

    rule {
      host = var.environment == "production" ? "www.deletetheirdata.com" : "deletetheirdata.neonlaw.net"
      http {
        path {
          backend {
            service_name = "production-interface"
            service_port = 80
          }
        }
      }
    }

    rule {
      host = var.environment == "production" ? "www.justiceforrickieslaughter.com" : "justiceforrickieslaughter.neonlaw.net"
      http {
        path {
          backend {
            service_name = "production-interface"
            service_port = 80
          }
        }
      }
    }

    rule {
      host = var.environment == "production" ? "www.shook.family" : "shookfamily.neonlaw.net"
      http {
        path {
          backend {
            service_name = "production-interface"
            service_port = 80
          }
        }
      }
    }
  }
}

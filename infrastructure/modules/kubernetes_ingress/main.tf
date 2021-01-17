resource "kubernetes_ingress" "primary" {
  metadata {
    name = "ingress"

    annotations = {
      "kubernetes.io/ingress.global-static-ip-name" = "neon-law"
      "ingress.gcp.kubernetes.io/pre-shared-cert" = "neon-law,law-job-resources"
    }
  }

  spec {
    backend {
      service_name = "${var.environment}-interface"
      service_port = 80
    }

    rule {
      host = var.environment == "production" ? "www.neonlaw.com" : "www.neonlaw.net"
      http {
        path {
          backend {
            service_name = "${var.environment}-api"
            service_port = 80
          }

          path = "/api/*"
        }
      }
    }

    rule {
      host = var.environment == "production" ? "www.neonlaw.com" : "www.neonlaw.net"
      http {
        path {
          backend {
            service_name = "${var.environment}-neo4j-neo4j"
            service_port = 7474
          }

          path = "/browser/*"
        }
      }
    }

    rule {
      host = var.environment == "production" ? "www.lawjobresources.com" : "www.lawjobresources.info"
      http {
        path {
          backend {
            service_name = "${var.environment}-law-job-resources-interface"
            service_port = 80
          }
        }
      }
    }
  }
}

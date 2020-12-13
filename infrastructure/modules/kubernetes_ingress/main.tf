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
      service_name = "interface"
      service_port = 80
    }

    rule {
      host = var.environment == "production" ? "www.neonlaw.com" : "www.neonlaw.info"
      http {
        path {
          backend {
            service_name = "api-${var.environment}"
            service_port = 80
          }

          path = "/api/*"
        }
      }
    }

    rule {
      host = var.environment == "production" ? "www.lawjobresources.com" : "www.lawjobresources.info"
      http {
        path {
          backend {
            service_name = "law-job-resources"
            service_port = 80
          }
        }
      }
    }
  }
}

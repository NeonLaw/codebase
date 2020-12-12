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
      host = "www.neonlaw.com"
      http {
        path {
          backend {
            service_name = "production-api"
            service_port = 80
          }

          path = "/api/*"
        }
      }
    }

    rule {
      host = "www.lawjobresources.com"
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

resource "kubernetes_ingress" "primary" {
  metadata {
    name = "ingress"

    annotations = {
      "kubernetes.io/ingress.global-static-ip-name" = "neon-law"
      "ingress.gcp.kubernetes.io/pre-shared-cert" = "neon-law,delete-your-data,law-job-resources,justice-for-rickie-slaughter"
    }
  }

  spec {
    backend {
      service_name = var.neon_law_interface_service_name
      service_port = 80
    }

    rule {
      host = var.neon_law_host
      http {
        path {
          backend {
            service_name = var.api_service_name
            service_port = 80
          }

          path = "/api/*"
        }
      }
    }

    rule {
      host = var.delete_your_data_host
      http {
        path {
          backend {
            service_name = var.delete_your_data_service_name
            service_port = 80
          }
        }
      }
    }

    rule {
      host = var.law_job_resources_host
      http {
        path {
          backend {
            service_name = var.law_job_resources_service_name
            service_port = 80
          }
        }
      }
    }

    rule {
      host = var.justice_for_rickie_slaughter_host
      http {
        path {
          backend {
            service_name = var.justice_for_rickie_slaughter_service_name
            service_port = 80
          }
        }
      }
    }
  }
}

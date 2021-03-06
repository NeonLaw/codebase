resource "kubernetes_ingress" "primary" {
  metadata {
    name = "whitelabeled-ingress"

    annotations = {
      "kubernetes.io/ingress.global-static-ip-name" = "neon-law"
      "ingress.gcp.kubernetes.io/pre-shared-cert"   = "delete-your-data,delete-their-data,justice-for-rickie-slaughter,shook-family"
    }
  }

  spec {
    rule {
      host = "www.deleteyourdata.com"
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
      host = "www.deletetheirdata.com"
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
      host = "www.justiceforrickieslaughter.com"
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
      host = "www.shook.family"
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

resource "kubernetes_deployment" "outbound_emails" {
  metadata {
    name = "${var.environment}-outbound-emails"
    labels = {
      app = "${var.environment}-outbound-emails"
    }
  }

  spec {
    replicas = 1

    selector {
      match_labels = {
        app = "${var.environment}-outbound-emails"
      }
    }

    template {
      metadata {
        labels = {
          app = "${var.environment}-outbound-emails"
        }
      }

      spec {
        volume {
          name = "gcp-credentials"

          secret {
            secret_name = "gcp-credentials"
          }
        }

        container {
          name = "outbound-emails"
          image = var.image_url

          env {
            name  = "PROCESS_NAME"
            value = "outbound-emails"
          }

          env {
            name = "DOPPLER_TOKEN"
            value_from {
              secret_key_ref {
                key  = "EMAIL_TOKEN"
                name = "doppler-secrets"
              }
            }
          }
        }
      }
    }
  }
}

resource "kubernetes_deployment" "server" {
  metadata {
    name = "${var.environment}-webhooks"
    labels = {
      app = "${var.environment}-webhooks"
    }
  }

  spec {
    replicas = 1

    selector {
      match_labels = {
        app = "${var.environment}-webhooks"
      }
    }

    template {
      metadata {
        labels = {
          app = "${var.environment}-webhooks"
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
          name = "webhooks"
          image = var.image_url

          env {
            name  = "RACK_ENV"
            value = "production"
          }

          env {
            name  = "PROCESS_NAME"
            value = "webhooks"
          }

          volume_mount {
            name       = "gcp-credentials"
            read_only  = true
            mount_path = "/credentials/"
          }

          readiness_probe {
            http_get {
              path = "/"
              port = 9292
            }
            initial_delay_seconds = 30
            period_seconds        = 1
          }
        }
      }
    }
  }
}

resource "kubernetes_service" "primary" {
  metadata {
    name = "${var.environment}-webhooks"
  }
  spec {
    selector = {
      app = "${var.environment}-webhooks"
    }
    session_affinity = "ClientIP"
    port {
      protocol    = "TCP"
      port        = 80
      target_port = 9292
    }

    type = "NodePort"
  }
}

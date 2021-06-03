resource "kubernetes_deployment" "web" {
  metadata {
    name = "${var.environment}-web"
    labels = {
      app = "${var.environment}-web"
    }
  }

  spec {
    replicas = 1

    selector {
      match_labels = {
        app = "${var.environment}-web"
      }
    }

    template {
      metadata {
        labels = {
          app = "${var.environment}-web"
        }
      }

      spec {
        container {
          image = var.image_url
          name  = "web"

          env {
            name  = "NODE_ENV"
            value = "production"
          }

          readiness_probe {
            http_get {
              path = "/"
              port = 3000
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
    name = "${var.environment}-web"
  }
  spec {
    selector = {
      app = "${var.environment}-web"
    }
    session_affinity = "ClientIP"
    port {
      protocol    = "TCP"
      port        = 80
      target_port = 3000
    }

    type = "NodePort"
  }
}

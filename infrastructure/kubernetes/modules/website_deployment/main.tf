resource "kubernetes_deployment" "interface" {
  metadata {
    name = "${var.environment}-${var.app_name}"
    labels = {
      app = "${var.environment}-${var.app_name}"
    }
  }

  spec {
    replicas = 1

    selector {
      match_labels = {
        app = "${var.environment}-${var.app_name}"
      }
    }

    template {
      metadata {
        labels = {
          app = "${var.environment}-${var.app_name}"
        }
      }

      spec {
        container {
          image = var.image_url
          name  = var.app_name
        }
      }
    }
  }
}

resource "kubernetes_service" "primary" {
  metadata {
    name = "${var.environment}-${var.app_name}"
  }
  spec {
    selector = {
      app = "${var.environment}-${var.app_name}"
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

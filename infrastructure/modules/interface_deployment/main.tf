resource "kubernetes_deployment" "interface" {
  metadata {
    name = "${var.environment}-interface"
    labels = {
      app = "${var.environment}-interface"
    }
  }

  spec {
    replicas = 1

    selector {
      match_labels = {
        app = "${var.environment}-interface"
      }
    }

    template {
      metadata {
        labels = {
          app = "${var.environment}-interface"
        }
      }

      spec {
        container {
          image = var.image_url
          name  = interface
        }
      }
    }
  }
}

resource "kubernetes_service" "primary" {
  metadata {
    name = "${var.environment}-interface"
  }
  spec {
    selector = {
      app = "${var.environment}-interface"
    }
    session_affinity = "ClientIP"
    port {
      protocol    = "TCP"
      port        = 80
      target_port = 80
    }

    type = "NodePort"
  }
}

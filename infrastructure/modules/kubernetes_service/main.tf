resource "kubernetes_service" "primary" {
  metadata {
    name = var.app_name
  }
  spec {
    selector = {
      app = var.app_name
    }
    session_affinity = "ClientIP"
    port {
      protocol    = "TCP"
      port        = 80
      target_port = var.target_port
    }

    type = "NodePort"
  }
}

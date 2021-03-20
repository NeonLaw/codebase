resource "kubernetes_ingress" "primary" {
  metadata {
    name = "ingress"

    annotations = {
      "kubernetes.io/ingress.global-static-ip-name" = "neon-law"
      "ingress.gcp.kubernetes.io/pre-shared-cert"   = "neon-law-api"
    }
  }

  spec {
    backend {
      service_name = "${var.environment}-api"
      service_port = 80
    }
  }
}

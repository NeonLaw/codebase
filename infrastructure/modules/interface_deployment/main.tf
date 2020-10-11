resource "kubernetes_deployment" "primary" {
  metadata {
    name = var.app_name
    labels = {
      app = var.app_name
    }
  }

  spec {
    replicas = 1

    selector {
      match_labels = {
        app = var.app_name
      }
    }

    template {
      metadata {
        labels = {
          app = var.app_name
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
    name = var.app_name
    annotations = {
      "cloud.google.com/backend-config" = "{\"default\": \"cloud-cdn\"}"
    }
  }
  spec {
    selector = {
      app = var.app_name
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

resource "kubernetes_manifest" "cloud_cdn_backend_config" {
  provider = kubernetes-alpha
  manifest = {
    apiVersion = "cloud.google.com/v1beta1"
    kind = "BackendConfig"
    metadata = {
      name = "cloud-cdn"
    }
    spec = {
      cdn = {
        enabled = "cdnEnabled"
        cachePolicy = {
          includeHost = true
          includeProtocol = false
          includeQueryString = true
          queryStringBlacklist = ["name"]
        }
      }
    }
  }
}

resource "kubernetes_deployment" "api" {
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
        volume {
          name = var.sql_proxy_secret_name

          secret {
            secret_name = var.sql_proxy_secret_name
          }
        }

        volume {
          name = var.third_party_saas_secret_name

          secret {
            secret_name = var.third_party_saas_secret_name
          }
        }

        volume {
          name = var.logic_secret_name

          secret {
            secret_name = var.logic_secret_name
          }
        }

        container {
          image = var.image_url
          name  = var.app_name
          env {
            name  = "DATABASE_URL"
            value = "postgres://postgres:${var.master_database_password}@127.0.0.1:5432/neon_law"
          }
          env {
            name  = "NODE_ENV"
            value = "production"
          }
          env {
            name  = "SHOW_GRAPHIQL"
            value = var.show_graphiql
          }
          env {
            name  = "NEW_RELIC_NO_CONFIG_FILE"
            value = "true"
          }
          env {
            name  = "NEW_RELIC_DISTRIBUTED_TRACING_ENABLED"
            value = "true"
          }
          env {
            name  = "NEW_RELIC_LICENSE_KEY"
            value = var.new_relic_license_key
          }
          env {
            name  = "NEW_RELIC_APP_NAME"
            value = var.app_name
          }

          volume_mount {
            name       = var.third_party_saas_secret_name
            read_only  = true
            mount_path = "/secrets/"
          }

          volume_mount {
            name       = var.logic_secret_name
            read_only  = true
            mount_path = "/credentials/"
          }
        }

        container {
          name    = "cloud-sql-proxy"
          image   = "gcr.io/cloudsql-docker/gce-proxy:1.17"
          command = ["/cloud_sql_proxy", "-ip_address_types=PRIVATE", "-instances=${var.project_id}:${var.region}:${var.database_name}=tcp:5432", "-credential_file=/credentials/credentials.json"]

          volume_mount {
            name       = var.sql_proxy_secret_name
            read_only  = true
            mount_path = "/credentials/"
          }
        }
      }
    }
  }
}

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
      target_port = 3000
    }

    type = "NodePort"
  }
}

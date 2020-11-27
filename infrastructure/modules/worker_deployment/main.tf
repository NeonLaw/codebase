resource "kubernetes_deployment" "worker_deployment" {
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
          name = var.logic_secret_name

          secret {
            secret_name = var.logic_secret_name
          }
        }

        container {
          image = var.image_url
          name  = var.app_name
          command = ["yarn", "workspace", "@neonlaw/workers", "start"]

          env {
            name  = "DATABASE_URL"
            value = "postgres://postgres:${var.master_database_password}@127.0.0.1:5432/neon_law"
          }

          env {
            name  = "NODE_ENV"
            value = "production"
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
            value = var.new_relic_app_name
          }

          env {
            name  = "SENDGRID_API_KEY"
            value = var.sendgrid_api_key
          }

          env {
            name = "AUTH0_CLIENT_ID"
            value_from {
              secret_key_ref {
                key = "AUTH0_CLIENT_ID"
                name = var.third_party_saas_secret_name
              }
            }
          }

          env {
            name = "AUTH0_CLIENT_SECRET"
            value_from {
              secret_key_ref {
                key = "AUTH0_CLIENT_SECRET"
                name = var.third_party_saas_secret_name
              }
            }
          }

          env {
            name = "AUTH0_TENANT"
            value_from {
              secret_key_ref {
                key = "AUTH0_TENANT"
                name = var.third_party_saas_secret_name
              }
            }
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

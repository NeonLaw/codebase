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
            value = "postgres://${var.database_admin_username}:${var.database_admin_password}@127.0.0.1:5432/neon_law"
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
            value = var.new_relic_app_name
          }
          env {
            name  = "API_URL"
            value = var.api_url
          }
          env {
            name  = "TRANSLOADIT_KEY"
            value = var.transloadit_key
          }
          env {
            name  = "TRANSLOADIT_SECRET"
            value = var.transloadit_secret
          }
          env {
            name  = "TRANSLOADIT_PDF_TEMPLATE_ID"
            value = var.transloadit_pdf_template_id
          }
          env {
            name  = "TRANSLOADIT_IMAGE_TEMPLATE_ID"
            value = var.transloadit_image_template_id
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
            name       = var.logic_secret_name
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

resource "kubernetes_deployment" "server" {
  metadata {
    name = "${var.environment}-${var.process_name}"
    labels = {
      app = "${var.environment}-${var.process_name}"
    }
  }

  spec {
    replicas = 1

    selector {
      match_labels = {
        app = "${var.environment}-${var.process_name}"
      }
    }

    template {
      metadata {
        labels = {
          app = "${var.environment}-${var.process_name}"
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
          image = var.image_url
          name  = var.process_name
          args  = var.args

          env {
            name  = "DATABASE_URL"
            value = "postgres://${var.database_admin_username}:${var.database_admin_password}@127.0.0.1:5432/neon_law"
          }

          env {
            name  = "NODE_ENV"
            value = "production"
          }

          env {
            name  = "PROCESS_NAME"
            value = var.process_name
          }

          env {
            name  = "SHOW_GRAPHIQL"
            value = "true"
          }

          env {
            name = "ENVIRONMENT"
            value_from {
              secret_key_ref {
                key  = "ENVIRONMENT"
                name = "application-secrets"
              }
            }
          }

          env {
            name = "API_URL"
            value_from {
              secret_key_ref {
                key  = "API_URL"
                name = "application-secrets"
              }
            }
          }

          env {
            name = "TRANSLOADIT_KEY"
            value_from {
              secret_key_ref {
                key  = "TRANSLOADIT_KEY"
                name = "application-secrets"
              }
            }
          }

          env {
            name = "TRANSLOADIT_SECRET"
            value_from {
              secret_key_ref {
                key  = "TRANSLOADIT_SECRET"
                name = "application-secrets"
              }
            }
          }

          env {
            name = "TRANSLOADIT_PDF_TEMPLATE_ID"
            value_from {
              secret_key_ref {
                key  = "TRANSLOADIT_PDF_TEMPLATE_ID"
                name = "application-secrets"
              }
            }
          }

          env {
            name = "TRANSLOADIT_IMAGE_TEMPLATE_ID"
            value_from {
              secret_key_ref {
                key  = "TRANSLOADIT_IMAGE_TEMPLATE_ID"
                name = "application-secrets"
              }
            }
          }

          env {
            name = "AUTH0_CLIENT_ID"
            value_from {
              secret_key_ref {
                key  = "AUTH0_CLIENT_ID"
                name = "application-secrets"
              }
            }
          }

          env {
            name = "AUTH0_CLIENT_SECRET"
            value_from {
              secret_key_ref {
                key  = "AUTH0_CLIENT_SECRET"
                name = "application-secrets"
              }
            }
          }

          env {
            name = "AUTH0_TENANT"
            value_from {
              secret_key_ref {
                key  = "AUTH0_TENANT"
                name = "application-secrets"
              }
            }
          }

          env {
            name = "SENDGRID_API_KEY"
            value_from {
              secret_key_ref {
                key  = "SENDGRID_API_KEY"
                name = "application-secrets"
              }
            }
          }

          env {
            name = "LOB_API_KEY"
            value_from {
              secret_key_ref {
                key  = "LOB_API_KEY"
                name = "application-secrets"
              }
            }
          }

          env {
            name = "STRIPE_API_PUBLISHABLE_KEY"
            value_from {
              secret_key_ref {
                key  = "STRIPE_API_PUBLISHABLE_KEY"
                name = "application-secrets"
              }
            }
          }

          env {
            name = "STRIPE_API_SECRET_KEY"
            value_from {
              secret_key_ref {
                key  = "STRIPE_API_SECRET_KEY"
                name = "application-secrets"
              }
            }
          }

          env {
            name = "REDIS_URL"
            value_from {
              secret_key_ref {
                key  = "REDIS_URL"
                name = "application-secrets"
              }
            }
          }

          env {
            name = "NEO4J_URL"
            value_from {
              secret_key_ref {
                key  = "NEO4J_URL"
                name = "application-secrets"
              }
            }
          }

          volume_mount {
            name       = "gcp-credentials"
            read_only  = true
            mount_path = "/credentials/"
          }
        }

        container {
          name    = "cloud-sql-proxy"
          image   = "gcr.io/cloudsql-docker/gce-proxy:1.17"
          command = ["/cloud_sql_proxy", "-ip_address_types=PRIVATE", "-instances=${var.project_id}:${var.region}:${var.database_name}=tcp:5432", "-credential_file=/credentials/credentials.json"]

          volume_mount {
            name       = "gcp-credentials"
            read_only  = true
            mount_path = "/credentials/"
          }
        }
      }
    }
  }
}

resource "kubernetes_service" "primary" {
  count = var.process_name == "api" ? 1 : 0

  metadata {
    name = "${var.environment}-${var.process_name}"
  }
  spec {
    selector = {
      app = "${var.environment}-${var.process_name}"
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

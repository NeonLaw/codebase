locals {
  superset_helm_chart_values = {
    ingress = {
      enabled = true
      annotations = {
        "kubernetes.io/ingress.class"                 = "nginx"
        "kubernetes.io/ingress.global-static-ip-name" = "neon-law"
        "kubernetes.io/ingress.allow-http"            = "false"
        "ingress.gcp.kubernetes.io/pre-shared-cert"   = "neon-law-superset"
      }

      hosts = var.environment == "production" ? ["superset.neonlaw.com"] : ["superset.neonlaw.net"]
    }

    bootstrapScript = <<EOF
      #!/bin/bash
      apt-get update -y &&\
      apt-get install -y --no-install-recommends nano &&\
      rm -rf /var/lib/apt/lists/*
      pip install psycopg2==2.8.5 redis==3.2.1 pybigquery elasticsearch-dbapi
      if [ ! -f ~/bootstrap ]; then echo "Running Superset with uid {{ .Values.runAsUser }}" > ~/bootstrap; fi
    EOF
  }
}

resource "helm_release" "superset" {
  name       = "${var.environment}-superset"
  repository = "https://apache.github.io/superset"
  chart      = "superset"
  verify     = false

  values = [
    yamlencode(local.superset_helm_chart_values)
  ]
}

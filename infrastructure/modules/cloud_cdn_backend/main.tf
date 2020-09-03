resource "kubernetes_manifest" "cloud-cdn" {
  provider = kubernetes-alpha

  manifest = {
    apiVersion = "cloud.google.com/v1beta1"
    kind = "BackendConfig"
    metadata = {
      name = "cloud-cdn"
    }
    spec = {
      cdn = {
        enabled = true
        includeHost = true
      }
    }
  }
}

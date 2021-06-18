resource "google_secret_manager_secret" "emails" {
  secret_id = "emails"

  labels = {
    environment = var.environment
  }

  replication {
    automatic = true
  }
}

resource "google_secret_manager_secret" "documents" {
  secret_id = "documents"

  labels = {
    environment = var.environment
  }

  replication {
    automatic = true
  }
}

resource "google_secret_manager_secret" "slack" {
  secret_id = "slack"

  labels = {
    environment = var.environment
  }

  replication {
    automatic = true
  }
}

resource "google_secret_manager_secret" "lob" {
  secret_id = "lob"

  labels = {
    environment = var.environment
  }

  replication {
    automatic = true
  }
}

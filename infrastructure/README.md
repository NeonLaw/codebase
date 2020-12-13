# Infrastructure

## Terraform

This folder contains a series of Terraform modules to deploy our
infrastructure on Google Cloud. On each push our private project on
[Terraform Cloud](https://api.terraform.io) applies the changes herein to our
GCP Projects, `Neon-Law-Production` and `Neon-Law-Staging`.

## Manual setup before creating Terraform workspaces.

- Create a service account for Terraform with Project Editor and Compute
  Network Admin permissions for both GCP project.
  - Store the Credentials JSON file as the envvar `gcp_credentials` in
    the `staging-gcp` and `production-gcp` Terraform Cloud workspaces, which
    use the `./infrastructure/gcp` repository
- Create and store a New Relic API token in the `new-relic` workspace.
- Create a global IP, named `neon-law` in each GCP project. Reserved global
  IPs are not supported in GCP Terraform.
- Enable the following APIs in the GCP Console
  - Google Cloud SQL Admin API
  - Cloud Resource Manager API
  - Compute Engine API
  - Container Registry API
  - Service Networking API
  - Kubernetes Engine API
  - Speech-to-Text API
  - Billing API
  - Billing Budget API

## Terraform Workspaces

On Terraform Cloud, we have the following workspaces:

* Billing GCP, for global Billing Alerts
* New Relic, for monitoring our applications
* Staging GCP, for creating a managed storage and GKE
* Staging Kubernetes, for running our server workloads on Kubernetes
* Production GCP, for creating a managed storage and GKE
* Production Kubernetes, for running our server workloads on Kubernetes

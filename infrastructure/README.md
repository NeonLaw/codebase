# Infrastructure

## Terraform

This folder contains a series of Terraform modules to deploy our
infrastructure on Google Cloud. On each push our private project on
[Terraform Cloud](https://api.terraform.io) applies the changes to our GCP
Projects.

## Step 0 - Manual setup before creating Terraform modules.

In each of our GCP projects, `Neon-Law-Production` and `Neon-Law-Staging`,
perform the following steps using the GCP Console.

- Create a service account for Terraform with Project Editor and Compute
  Network Admin permissions
  - Store the Credentials JSON file as the envvar `gcp_credentials` in
    the `staging-gcp` and `production-gcp` Terraform Cloud workspaces
- Create a service account for CloudSQL with SQL Connect permissions
  - Store the Credentials JSON file as the envvar `sql_proxy_gcp_credentials` in
    the `staging-kubernetes` and `production-kubernetes` Terraform Cloud
    workpsaces.
- Create a service account for GitHub Actions with Project Editor permissions
  - Store the Credentials JSON file as the envvar `STAGING_GCP_CREDENTIALS` in
    our GitHub organization
- Create a service account for our backend code with permissions to access the
  speech-to-text api.
  - Store the Credentials JSON file as the envvar `logic_gcp_credentials` in
    the `staging-kubernetes` and `production-kubernetes` Terraform Cloud
    workpsaces.
- Create a global IP, named `neon-law`. Reserved global IPs are not supported
  in GCP Terraform.
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

## Step 1 - the Staging GCP Module

After manually setting up your GCP environment, you are now ready to run the
`staging_gcp` module located an `./staging_gcp/main`. This **must** be ran
before proceeding to step 2 as the modules created in the Staging GCP module
are required for the `Staging Kubernetes` one.

After you created the Staging GCP module, you must make a few more manual
steps before proceeding to the next step:

- In the newly created Cloud SQL instance, create the databases `neon_law` and
  `strapi`, and change the database password for the master user, `postgres`
  and save that as the `master_database_password` environment variable in the
  `staging-kubernetes` Terraform workspace on Terraform cloud.
- Push images to the `api` and `interface` repository. We do so via GitHub
  actions in these respective repositories

> Until Terraform 0.13 is released, you will need to first run this module
> commenting out everything below the `module "network_service_connection"`
> block is finished because this block creates a Private IP CIDR used in
> subsequent Terraform calls.

## Step 2 - the Staging Kubernetes Module

After creating the Staging GCP module and adding the necessary environment
variables, you are now ready to create the `staging-kubernetes` workspace.

Additionally, you are now ready to make DNS entries to point records at
neonlaw.net to the ingress IPs for the `interface` and `api` ingresses
respectively. We use Google Domains as our DNS registrar/hosting service and
you can make A records for the IP addresses listed in the GCP console.

## Step 3 - the Production GCP Module

Repeat step 1 for the Production GCP module, instead now for the
`Neon-Law-Production` account. Ensure you are also repeating what you need to
do afterwards to prepare the proper variables for the `production-kubernetes`
Terraform workspace.

## Step 4 - the Production Kubernetes Module

This is the same as step 2, instead now it is for the production instances
using the `neon-law-production` GCP project. Ensure that after this is
complete, you make the proper DNS entries

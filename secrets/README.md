# Neon Secrets

This gem is used by other gems to manage environment variables, either locally
with Doppler, or in our GCP environments with GCP Secrets Manager.

## Interface

This gem exposes one class, `NeonSecrets::Getter`, with one method, `.get`. In
your code you can call it like:

```ruby
import 'neon_secrets'

NeonSecrets::Getter.get(secret_name: "postgres_url")
NeonSecrets::Getter.get(secret_name: "stripe_api_key")
```

Secrets are set in Doppler by Neon Law administrators.

## The NEON_ENV environment variable

This gem works based on the value of `NEON_ENV`, which should either be
`development`, `staging`, or `production`. If this is not set,
`NeonSecrets::Getter.get` will throw an error.

## Doppler Setup

In the `GCP` Doppler Project, we manage three environments. The development
environment (`dev`), which points to a locally running postgres, pubsub, and
staging/test third-party credentials; the staging environment (`stg`), which
uses GCP staging credentials and staging/test third-party credentials; and the
production environment (`prd`), which uses GCP production and third-party
production credentials. The `stg` and `prd` Doppler environments are each synced
with the Google Secret, `application-secrets` in each cloud environment
respectively.

The Doppler Environment should correspond to the `NEON_ENV` environment
variable.

## Contributing

Bug reports and pull requests are welcome on GitHub at
https://github.com/neonlaw/codebase.

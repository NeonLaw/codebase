# Neon Search

This gem is used to create, update, and delete records in
[meilisearch](https://meilisearch.com).

## Interface

This gem exposes one class, `NeonSecrets::Getter`, with one method, `.get`. In
your code you can call it like:

```ruby
import 'neon_secrets'

NeonSecrets::Getter.get(secret_name: "postgres_url")
NeonSecrets::Getter.get(secret_name: "stripe_api_key")
```

Secrets are set in Doppler by Neon Law administrators.

## Doppler Setup

Use the `search` project and the `dev` environment when working locally using a
locally-ran instance of Melisearch. The `stg` and `prd` correspond to our
staging and production accounts.

## Contributing

Bug reports and pull requests are welcome on GitHub at
https://github.com/neonlaw/codebase.

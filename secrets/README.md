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

If the `NEON_ENV` is `staging` or `production`, you will also need the
`NEON_PROJECT` set so that this library can find the proper GCP Secret
containing the environment variables.

## Contributing

Bug reports and pull requests are welcome on GitHub at
https://github.com/neonlaw/codebase.

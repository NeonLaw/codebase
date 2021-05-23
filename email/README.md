# Neon Email

This gem is used to listen to email messages to Kafka and then interact with the
Sendgrid API.

## Doppler Setup

You can use the `email` project in Doppler and access the `dev` environment when
developing locally. The `stg` and `prd` environments are used for staging and
production respectively.

Local development requires you to start the GCP Pub/Sub locally if you want to
test the gem end-to-end, _however_ you will most likely *not* need to start the
GCP server because we can depend on the arity defined in the `neon_schemas` gem
as a contract that this is how objects in this gem will be initialized and have
their methods invoked. You should be able to develop the functionality needed
here fully using POROs and necessary email APIs like Sendgrid.

## Contributing

Bug reports and pull requests are welcome on GitHub at
https://github.com/neonlaw/codebase.

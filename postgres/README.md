# NeonPostgres

This gem is mainly used to test the Neon Law database which is created and
maintained by Graphile. It is also consumed by other background-job ruby gems
that handle non-web-request related processing.

## Inter Database Copy

To copy data between two databases run the following script from the root of
this codebase (`../`) from this directory.

```bash
doppler setup # project inter_db_copy, environment production

# Copy the GCP credentials to your machine from the above directory
yarn copy-gcp-credentials

# These following commands start db processes so you may need to run them in
# separate shells.
yarn sql-proxy-production
yarn sql-proxy-staging

# Then in this directory run
doppler run -- bundle exec ruby lib/neon_postgres/inter_database_copy/copy.rb
```

We use this ruby script to copy data from `production` to `staging` so we can
freely showcase our software without fear of disclosing client interests.

## Contributing

Bug reports and pull requests are welcome on GitHub at
https://github.com/neonlaw/codebase.


## Getting a Sequel database

1. Start the SQL proxy for staging or production
2. Use the inter_db_copy doppler project
3. `bundle exec sequel $(doppler secrets get FROM_DATABASE_URL --plain)`

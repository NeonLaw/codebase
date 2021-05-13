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

docker build -t inter_db_copy -f ./postgres/Dockerfile .
docker run \
  -e DATABASE_URL=$(doppler secrets get DATABASE_URL --plain) \
  -e FROM_DATABASE_URL=$(doppler secrets get FROM_DATABASE_URL --plain) \
  -e TO_DATABASE_URL=$(doppler secrets get TO_DATABASE_URL --plain) \
  inter_db_copy
```

We use this ruby script to copy data from `production` to `staging` so we can
freely showcase our software without fear of disclosing client interests.

## Contributing

Bug reports and pull requests are welcome on GitHub at
https://github.com/neonlaw/codebase.


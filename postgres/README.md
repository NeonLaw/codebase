# NeonPostgres

This gem is mainly used to test the Neon Law database which is created and
maintained by Graphile. It is also consumed by other background-job ruby gems
that handle non-web-request related processing.

## Inter Database Copy

To copy data between two databases, start each, and set the environment
variables `FROM_DATABASE_URL` and `TO_DATABASE_URL`. Then you can run:

```
bundle exec ruby neon_postgres/inter_database_copy/copy.rb
```

We use this ruby script to copy data from `production` to `staging` so we can
freely showcase our software without fear of disclosing client interests.

## Contributing

Bug reports and pull requests are welcome on GitHub at
https://github.com/neonlaw/codebase.


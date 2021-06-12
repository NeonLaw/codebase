# Neon Law Server

This folder contains a GraphQL API powered by Postgraphile and background jobs
handled by Graphile Worker. Migrations are committed with graphile migrate.

## Seeding the database

To begin working on the application, it may be helpful to have seeded data which
is a reflection of our production data. To obtain seeded data, you can run:

```bash
yarn db:seed
```

from the root of this codebase.

## Creating a migration

To create a migration, you will need to edit the `migrations/current.sql` file.
Then after `cd`ing into the shell as described above, you can run
`yarn migrate:watch` to run your migration on every file change. When you are
satisfied with the changes, you can run `yarn migrate:commit`.

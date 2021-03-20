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

## Accessing the shell

You are encouraged to work on this application via `docker-compose` which is
detailed at the top-level `README` in this repository. Then, you can access
the shell via:

```
docker exec -it shell /bin/bash
```

or, by accessing the shell via VSCode after attaching to the remote `shell`
container.

## Creating a migration

To create a migration, you will need to edit the `migrations/current.sql` file.
Then after `cd`ing into the shell as described above, you can run
`yarn migrate:watch` to run your migration on every file change. When you are
satisfied with the changes, you can run `yarn migrate:commit`.

## Restarting the API

If you make a change to the API and want to restart the server, you can do so
by simply restarting the Docker container with:

```
docker restart api
```

## Attaching to the logs

If you'd like to see the logs of the API, you can attach to sysout via:

```
docker attach api
```

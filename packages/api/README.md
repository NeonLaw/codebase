# Neon Law API

This folder contains a GraphQL API powered by Postgraphile.

## Accessing the shell

You are encouraged to work on this application via `docker-compose` which is detailed at the top-level `README` in this repository. Then, you can access the shell via:

```
docker exec -it shell /bin/bash
```

or, by accessing the shell via VSCode after attaching to the remote `shell`
container.

## Creating a migration

After accessing the shell and seeing a linux command prompt, `cd` into the
api folder with:

```bash
cd ./packages/api
```

From there, you can run `yarn run graphile-migrate watch` and make changes to
the `migrations/current.sql` file. At first, it may seem unusual to have a
the `watch` process look for changes. However, it is the library's intent to
have you write idempotent migrations, so the code should be the same upon
every iteration. Once you are satisfied with your changes, you can then
terminated the `yarn run graphile-migrate watch` process and run
`yarn run graphile-migrate commit`, which will commit the migration.

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

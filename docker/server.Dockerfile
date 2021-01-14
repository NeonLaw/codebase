FROM docker.pkg.github.com/neonlaw/codebase/base:latest

USER neon

ENV DATABASE_URL $DATABASE_URL
ENV SHADOW_DATABASE_URL $SHADOW_DATABASE_URL
ENV NODE_ENV $NODE_ENV
ENV SHOW_GRAPHIQL $SHOW_GRAPHIQL

WORKDIR /app

COPY --chown neon:neon package.json .
COPY --chown neon:neon yarn.lock .
RUN yarn install \
  --silent \
  --ignore-optional \
  --prefer-offline \
  --cache-folder ./node_modules

COPY --chown neon:neon ./docker/server.entrypoint.sh ./docker
COPY --chown neon:neon ./packages/server ./packages/server

EXPOSE 3000
ENTRYPOINT [ "/app/docker/server.entrypoint.sh" ]
CMD [ "yarn", "workspace", "@neonlaw/server", "start" ]

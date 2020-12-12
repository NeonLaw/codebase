FROM docker.pkg.github.com/neonlaw/codebase/base:latest

ENV DATABASE_URL $DATABASE_URL
ENV SHADOW_DATABASE_URL $SHADOW_DATABASE_URL
ENV NODE_ENV $NODE_ENV
ENV SHOW_GRAPHIQL $SHOW_GRAPHIQL

WORKDIR /app

COPY package.json .
COPY yarn.lock .
RUN yarn install \
  --silent \
  --ignore-optional \
  --prefer-offline \
  --cache-folder ./node_modules

COPY ./docker/workers.entrypoint.sh ./docker
COPY ./packages/server ./packages/server

ENTRYPOINT [ "/app/docker/workers.entrypoint.sh" ]
CMD [ "yarn", "workspace", "@neonlaw/server", "start:workers" ]

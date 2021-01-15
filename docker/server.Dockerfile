FROM docker.pkg.github.com/neonlaw/codebase/base:latest

RUN addgroup neon
RUN useradd -r -s /bin/bash -g neon -G sudo -u 1001 neon
RUN chown -R neon:neon /
USER neon

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

COPY ./docker/server.entrypoint.sh ./docker
COPY ./packages/server ./packages/server

EXPOSE 3000
ENTRYPOINT [ "/app/docker/server.entrypoint.sh" ]
CMD [ "yarn", "workspace", "@neonlaw/server", "start" ]

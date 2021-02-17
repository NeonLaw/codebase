FROM docker.pkg.github.com/neonlaw/codebase/base:latest

ENV DATABASE_URL $DATABASE_URL
ENV SHADOW_DATABASE_URL $SHADOW_DATABASE_URL
ENV NODE_ENV $NODE_ENV
ENV SHOW_GRAPHIQL $SHOW_GRAPHIQL

WORKDIR /app

COPY package.json .
COPY yarn.lock .
RUN yarn install --silent --ignore-optional

WORKDIR /app/server

COPY ./server ./
COPY ./docker/server.entrypoint.sh ./entrypoint.sh

EXPOSE 3000
ENTRYPOINT [ "/app/server/entrypoint.sh" ]
CMD [ "yarn", "start" ]

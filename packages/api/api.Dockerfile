FROM node:12

RUN apt-get update -qq &&\
  apt-get -y install libpq-dev netcat postgresql postgresql-contrib &&\
  apt-get clean &&\
  rm -rf /var/lib/apt/lists/**

WORKDIR /app

# Environment variables needed to run this API
ENV DATABASE_URL $DATABASE_URL
ENV SHADOW_DATABASE_URL $SHADOW_DATABASE_URL
ENV NODE_ENV $NODE_ENV
ENV SHOW_GRAPHIQL $SHOW_GRAPHIQL

COPY package.json .
COPY yarn.lock .
RUN yarn install

COPY . .

EXPOSE 3000
ENTRYPOINT [ "./entrypoint.sh" ]
CMD [ "yarn", "start" ]

FROM nikolaik/python-nodejs:python3.8-nodejs12

# Install dependencies from apt.
RUN apt-get update -qq \
  && apt-get install -y ncat \
  && apt-get clean \
  && rm -f /var/lib/apt/lists/*_*

ENV DATABASE_URL $DATABASE_URL
ENV SHADOW_DATABASE_URL $SHADOW_DATABASE_URL
ENV NODE_ENV $NODE_ENV
ENV SHOW_GRAPHIQL $SHOW_GRAPHIQL

WORKDIR /app

COPY package.json .
COPY yarn.lock .
RUN yarn install

COPY . .

EXPOSE 3000
ENTRYPOINT [ "./docker/api.entrypoint.sh" ]
CMD [ "yarn", "workspace", "@neonlaw/api", "start" ]

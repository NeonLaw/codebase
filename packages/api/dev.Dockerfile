FROM node:12

RUN apt-get update -qq &&\
  apt-get -y install libpq-dev netcat postgresql postgresql-contrib &&\
  apt-get clean &&\
  rm -rf /var/lib/apt/lists/**

WORKDIR /app

# Environment variables needed to run this API
ENV DATABASE_URL $DATABASE_URL
ENV SHADOW_DATABASE_URL $SHADOW_DATABASE_URL

COPY package.json .
COPY yarn.lock .
RUN yarn install --ignore-optional --silent

COPY . .

CMD [ "./shell.sh" ]

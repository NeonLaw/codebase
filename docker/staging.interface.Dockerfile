ARG DOMAIN_NAME
ARG GATSBY_ACTIVE_ENV
ARG GATSBY_AUTH0_CALLBACK
ARG GATSBY_AUTH0_CLIENT_ID
ARG GATSBY_AUTH0_DOMAIN

FROM docker.pkg.github.com/neonlaw/codebase/base:latest AS build

ARG DOMAIN_NAME
ARG GATSBY_ACTIVE_ENV
ARG GATSBY_AUTH0_CALLBACK
ARG GATSBY_AUTH0_CLIENT_ID
ARG GATSBY_AUTH0_DOMAIN

WORKDIR /app

COPY package.json .
COPY yarn.lock .
RUN yarn install --silent --cache-folder ./node_modules/

COPY . .

RUN yarn workspace @neonlaw/interface build

RUN awk "{gsub(/DOMAIN_NAME/, \"$DOMAIN_NAME\"); print}" ./docker/staging.nginx.conf > docker.nginx.conf

FROM nginx

COPY --from=build /app/packages/interface/public /usr/share/nginx/html
COPY --from=build /app/docker.nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

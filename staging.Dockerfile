FROM node:12-buster AS build

ARG GATSBY_ACTIVE_ENV
ARG GATSBY_AUTH0_CALLBACK
ARG GATSBY_AUTH0_DOMAIN
ARG GATSBY_AUTH0_CLIENT_ID

WORKDIR /app
ADD . ./
RUN yarn install --ignore-optional --silent
RUN yarn build

FROM nginx
COPY --from=build /app/public /usr/share/nginx/html
COPY staging.nginx.conf /etc/nginx/nginx.conf
COPY staging_htpasswd /etc/nginx/.htpasswd

EXPOSE 80

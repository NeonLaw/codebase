ARG APP_NAME
ARG DOMAIN_NAME
ARG GATSBY_ACTIVE_ENV
ARG GATSBY_AUTH0_CALLBACK
ARG GATSBY_AUTH0_CLIENT_ID
ARG GATSBY_AUTH0_DOMAIN
ARG GATSBY_AUTH0_TENANT
ARG GATSBY_LOGROCKET_CREDENTIALS

FROM docker.pkg.github.com/neonlaw/codebase/base:latest AS build

ARG APP_NAME
ARG DOMAIN_NAME
ARG GATSBY_ACTIVE_ENV
ARG GATSBY_AUTH0_CALLBACK
ARG GATSBY_AUTH0_CLIENT_ID
ARG GATSBY_AUTH0_DOMAIN
ARG GATSBY_AUTH0_TENANT
ARG GATSBY_LOGROCKET_CREDENTIALS

WORKDIR /app

COPY package.json .
COPY yarn.lock .
RUN yarn install --silent

COPY . .

RUN cp -vr ./packages/shared-ui/fonts ./packages/$APP_NAME/static
RUN yarn workspace @neonlaw/$APP_NAME build

RUN awk "{gsub(/DOMAIN_NAME/, \"$DOMAIN_NAME\"); print}" ./docker/production.nginx.conf > docker.nginx.conf

FROM nginx
ARG APP_NAME

COPY --from=build /app/packages/$APP_NAME/public /usr/share/nginx/html
COPY --from=build /app/docker.nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

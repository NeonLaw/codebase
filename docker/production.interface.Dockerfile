ARG DOMAIN_NAME
ARG APP_NAME
ARG GATSBY_ACTIVE_ENV

FROM docker.pkg.github.com/neonlaw/codebase/base:latest AS build

ARG DOMAIN_NAME
ARG APP_NAME
ARG GATSBY_ACTIVE_ENV

WORKDIR /app

COPY package.json .
COPY yarn.lock .
RUN yarn install --silent

COPY . .

RUN yarn workspace @neonlaw/interface build

RUN awk "{gsub(/DOMAIN_NAME/, \"$DOMAIN_NAME\"); print}" ./docker/production.nginx.conf > docker.nginx.conf

FROM nginx

ARG APP_NAME

COPY --from=build /app/packages/interface/public /usr/share/nginx/html
COPY --from=build /app/docker.nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

ARG GATSBY_ACTIVE_ENV=production

FROM node:12-buster AS build

ARG GATSBY_ACTIVE_ENV
ARG AUTH0_CALLBACK

WORKDIR /app
ADD . ./
RUN yarn install --ignore-optional
RUN yarn build
RUN ls -la **/*

FROM nginx
COPY --from=build /app/public /usr/share/nginx/html
COPY staging.nginx.conf /etc/nginx/nginx.conf
COPY staging_htpasswd /etc/nginx/.htpasswd

EXPOSE 80

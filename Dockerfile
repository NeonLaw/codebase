ARG GATSBY_ACTIVE_ENV=production

FROM node:12-buster AS build

ARG GATSBY_ACTIVE_ENV
ARG AUTH0_CALLBACK
ARG AUTH0_DOMAIN
ARG AUTH0_CLIENT_ID

ENV API_URL=$API_URL

WORKDIR /app
ADD . ./
RUN yarn install --ignore-optional
RUN yarn build
RUN ls -la **/*

FROM nginx
COPY --from=build /app/public /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

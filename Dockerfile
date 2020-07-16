ARG APP_NAME
FROM node:12 AS build

ARG GATSBY_API_URL
ARG GATSBY_AUTH0_CALLBACK
ARG GATSBY_AUTH0_DOMAIN
ARG GATSBY_AUTH0_CLIENT_ID
ARG APP_NAME

WORKDIR /app
ADD . ./
RUN yarn install --ignore-optional --silent
RUN cd packages/$APP_NAME && yarn build

FROM nginx
ARG APP_NAME

COPY --from=build /app/packages/$APP_NAME/public /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

FROM node:12-buster AS build

ARG GATSBY_ACTIVE_ENV
ARG GATSBY_API_URL

WORKDIR /app
ADD . ./
RUN yarn install --ignore-optional --silent
RUN yarn build

FROM nginx
COPY --from=build /app/public /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

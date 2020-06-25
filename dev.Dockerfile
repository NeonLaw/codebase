FROM node:12-buster AS build

ARG GATSBY_ACTIVE_ENV
ARG GATSBY_API_URL

WORKDIR /app
ADD . ./
RUN yarn install
RUN yarn develop

EXPOSE 8000

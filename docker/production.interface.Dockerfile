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
RUN yarn install --silent --ignore-optional --no-cache --frozen-lockfile

COPY ./ ./

WORKDIR /app/web

RUN yarn build
EXPOSE 3000
CMD ["yarn", "start"]

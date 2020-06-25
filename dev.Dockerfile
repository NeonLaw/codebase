FROM node:12-buster AS build

ARG GATSBY_ACTIVE_ENV
ARG GATSBY_API_URL

WORKDIR /app
ADD . ./
RUN yarn install

EXPOSE 8000

CMD ["yarn", "develop", "-H", "0.0.0.0"]

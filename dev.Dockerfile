FROM node:12

ARG GATSBY_API_URL

ENV GATSBY_ACTIVE_ENV="development"

WORKDIR /app
ADD . ./
RUN yarn install
RUN yarn build

EXPOSE 8000

CMD ["yarn", "serve", "-H", "0.0.0.0", "-p", "8000"]

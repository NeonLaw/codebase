ARG APP_NAME
ARG DOMAIN_NAME

FROM neonlaw/base AS build

ARG GATSBY_API_URL
ARG GATSBY_AUTH0_CALLBACK
ARG GATSBY_AUTH0_DOMAIN
ARG GATSBY_AUTH0_CLIENT_ID
ARG APP_NAME
ARG DOMAIN_NAME

WORKDIR /app

COPY package.json .
COPY yarn.lock .
RUN yarn install --ignore-optional --silent

COPY . .

RUN cp -vr packages/shared-ui/fonts packages/$APP_NAME/static
RUN cd packages/$APP_NAME && yarn build

RUN awk "{gsub(/DOMAIN_NAME/, \"$DOMAIN_NAME\"); print}" ./docker/production.nginx.conf > docker.nginx.conf

FROM nginx
ARG APP_NAME

COPY --from=build /app/packages/$APP_NAME/public /usr/share/nginx/html
COPY --from=build /app/docker.nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

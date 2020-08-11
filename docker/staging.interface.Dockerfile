ARG APP_NAME
ARG DOMAIN_NAME

FROM neonlaw/base

ARG GATSBY_ACTIVE_ENV
ARG GATSBY_AUTH0_CALLBACK
ARG GATSBY_AUTH0_DOMAIN
ARG GATSBY_AUTH0_CLIENT_ID
ARG APP_NAME
ARG DOMAIN_NAME

RUN yarn install --ignore-optional --silent
RUN cp -vr packages/shared-ui/fonts packages/$APP_NAME/static
RUN cd packages/$APP_NAME && yarn build

RUN awk "{gsub(/DOMAIN_NAME/, \"$DOMAIN_NAME\"); print}" ./docker/staging.nginx.conf > docker.nginx.conf

FROM nginx
ARG APP_NAME

COPY --from=build /app/packages/$APP_NAME/public /usr/share/nginx/html
COPY --from=build /app/docker.nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

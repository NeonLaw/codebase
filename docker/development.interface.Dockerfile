FROM docker.pkg.github.com/neonlaw/codebase/base:latest

ENV PACKAGE_NAME $PACKAGE_NAME

WORKDIR /app
ADD . ./

RUN yarn install \
  --silent \
  --ignore-optional \
  --prefer-offline \
  --cache-folder ./node_modules

RUN yarn workspace @neonlaw/$PACKAGE_NAME build

EXPOSE 8000

CMD [ "./docker/interface.command.sh" ]

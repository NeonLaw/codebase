FROM docker.pkg.github.com/neonlaw/codebase/base:latest

ENV PACKAGE_NAME $PACKAGE_NAME

WORKDIR /app

COPY package.json .
COPY yarn.lock .
RUN yarn install \
  --silent \
  --ignore-optional \
  --frozen-lockfile \
  --prefer-offline \
  --cache-folder ./node_modules

ADD . ./

EXPOSE 8000

CMD [ "./docker/interface.command.sh" ]

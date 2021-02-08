FROM docker.pkg.github.com/neonlaw/codebase/base:latest

ENV PACKAGE_NAME $PACKAGE_NAME

WORKDIR /app

COPY package.json .
COPY yarn.lock .
RUN yarn install --silent --ignore-optional

ADD . ./

EXPOSE 8000

CMD [ "./docker/development.interface.command.sh" ]

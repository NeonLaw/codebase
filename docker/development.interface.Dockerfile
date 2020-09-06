FROM docker.pkg.github.com/neonlaw/codebase/base:latest

ENV PACKAGE_NAME $PACKAGE_NAME

WORKDIR /app
ADD . ./

EXPOSE 8000

CMD [ "./docker/interface.command.sh" ]

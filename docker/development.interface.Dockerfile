FROM nikolaik/python-nodejs:python3.8-nodejs12

ENV PACKAGE_NAME $PACKAGE_NAME

WORKDIR /app
ADD . ./

EXPOSE 8000

CMD [ "./docker/interface.command.sh" ]

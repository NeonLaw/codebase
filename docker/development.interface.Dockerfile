FROM nikolaik/python-nodejs:python3.8-nodejs12

# Install dependencies from apt.
RUN apt-get update -qq \
  && apt-get install -y ncat \
  && apt-get clean \
  && rm -f /var/lib/apt/lists/*_*

ENV PACKAGE_NAME $PACKAGE_NAME

WORKDIR /app
ADD . ./

EXPOSE 8000

CMD [ "./docker/interface.command.sh" ]

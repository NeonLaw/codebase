FROM ruby:3

WORKDIR /app

COPY ./webhooks .
RUN bundle install

ENTRYPOINT [ "bundle", "exec" ]
CMD [ "rackup" ]

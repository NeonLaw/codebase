FROM ruby:3

WORKDIR /app

ADD ./webhooks/Gemfile .
ADD ./webhooks/Gemfile.lock .
RUN bundle install

COPY ./webhooks .

ENTRYPOINT [ "bundle", "exec" ]
CMD [ "rackup" ]

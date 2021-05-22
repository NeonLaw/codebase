FROM ruby:3

WORKDIR /app

COPY ./email .
RUN bundle install

ENTRYPOINT [ "bundle", "exec" ]
CMD [ "ruby", "lib/neon_email/subscriber.rb" ]

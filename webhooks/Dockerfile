FROM ruby:3

WORKDIR /app

ADD Gemfile .
ADD Gemfile.lock .
RUN bundle install

COPY . .

ENTRYPOINT [ "bundle", "exec" ]
CMD [ "rackup" ]

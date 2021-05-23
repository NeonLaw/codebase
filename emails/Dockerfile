FROM ruby:3

RUN (curl -Ls https://cli.doppler.com/install.sh || wget -qO- https://cli.doppler.com/install.sh) | sh

WORKDIR /app

COPY ./emails .
RUN bundle install

ENTRYPOINT [ "doppler", "run", "--" ]
CMD [ "bundle", "exec", "ruby", "lib/neon_email/subscriber.rb" ]

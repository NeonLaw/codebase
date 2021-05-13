FROM docker.pkg.github.com/neonlaw/codebase/base:latest

ENV DATABASE_URL $DATABASE_URL
ENV FROM_DATABASE_URL $FROM_DATABASE_URL
ENV TO_DATABASE_URL $TO_DATABASE_URL

# Install dependencies from apt-get
RUN apt-get update -qqy &&\
  apt-get -qqyy install ruby-full
RUN gem install bundler

## TODO use Doppler
# RUN (curl -Ls https://cli.doppler.com/install.sh || wget -qO- https://cli.doppler.com/install.sh) | sh
# ENTRYPOINT [ "doppler", "run", "--" ]

WORKDIR /app/postgres

COPY ./postgres/Gemfile .
COPY ./postgres/Gemfile.lock .
RUN bundle install

COPY ./postgres ./

ENTRYPOINT [ "bundle", "exec" ]
CMD ["ruby", "lib/neon_postgres/inter_database_copy/copy.rb"]

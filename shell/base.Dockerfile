FROM python:buster

# Add Node and postgres repositories
RUN curl -sL https://deb.nodesource.com/setup_14.x | bash -
RUN apt -y install vim bash-completion wget
RUN wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | apt-key add -
RUN echo "deb http://apt.postgresql.org/pub/repos/apt/ `lsb_release -cs`-pgdg main" | tee  /etc/apt/sources.list.d/pgdg.list

# Install dependencies from apt-get
RUN apt-get update -qqy &&\
  apt-get -qqyy install \
  nodejs \
  ncat \
  postgresql-13 \
  postgresql-client-13 \
  libgtk2.0-0 \
  libgtk-3-0 \
  libgbm-dev \
  libnotify-dev \
  libgconf-2-4 \
  libnss3 \
  libvips \
  libxss1 \
  libasound2 \
  libxtst6 \
  ruby-full \
  wget \
  xauth \
  xvfb &&\
  apt-get clean &&\
  rm -f /var/lib/apt/lists/*_*

RUN gem install bundler

# Install pandoc
RUN TEMP_DEB="$(mktemp)" &&\
  wget -O "$TEMP_DEB" https://github.com/jgm/pandoc/releases/download/2.10.1/pandoc-2.10.1-1-amd64.deb &&\
  dpkg -i "$TEMP_DEB" &&\
  rm -f "$TEMP_DEB"

# Install yarn via NPM
RUN npm i -g yarn

WORKDIR /app

# Install Dependencies
COPY package.json .
COPY yarn.lock .
RUN yarn install

COPY . .

ENTRYPOINT [ "/app/docker/base.entrypoint.sh" ]

CMD [ "tail", "-f", "/dev/null"]

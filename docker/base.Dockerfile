FROM python:buster

# Add Node repositories
RUN curl -sL https://deb.nodesource.com/setup_14.x | bash -

# Install dependencies from apt-get
RUN apt-get update -qqy &&\
  apt-get -qqyy install \
  nodejs \
  ncat \
  postgresql \
  postgresql-contrib \
  libgtk2.0-0 \
  libgtk-3-0 \
  libgbm-dev \
  libnotify-dev \
  libgconf-2-4 \
  libnss3 \
  libxss1 \
  libasound2 \
  libxtst6 \
  wget \
  xauth \
  xvfb &&\
  apt-get clean &&\
  rm -f /var/lib/apt/lists/*_*

# Install pandoc
RUN TEMP_DEB="$(mktemp)" &&\
  wget -O "$TEMP_DEB" https://github.com/jgm/pandoc/releases/download/2.10.1/pandoc-2.10.1-1-amd64.deb &&\
  dpkg -i "$TEMP_DEB" &&\
  rm -f "$TEMP_DEB"

# Install neo4j
RUN TEMP_DEB="$(mktemp)" &&\
  wget -O "$TEMP_DEB" https://dist.neo4j.org/cypher-shell/cypher-shell_4.2.2_all.deb &&\
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

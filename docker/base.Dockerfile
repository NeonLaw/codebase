FROM python

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

# Install yarn via NPM
RUN npm i -g yarn

RUN mkdir /app
RUN addgroup neon
RUN useradd -r -s /bin/bash -g neon -G sudo -u 1001 neon
RUN chown -R neon:neon /app
USER neon

WORKDIR /app

# Install Dependencies
COPY package.json .
COPY yarn.lock .
RUN yarn install --cache-folder ./node_modules

COPY . .

ENTRYPOINT [ "/app/docker/base.entrypoint.sh" ]

CMD [ "tail", "-f", "/dev/null"]

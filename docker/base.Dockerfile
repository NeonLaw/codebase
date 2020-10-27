FROM python

# Add Node repositories
RUN curl -sL https://deb.nodesource.com/setup_14.x | bash -
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list

# Install dependencies from apt-get
RUN apt-get update -qqy &&\
  apt-get -qqyy install nodejs yarn ncat postgresql postgresql-contrib &&\
  apt-get clean &&\
  rm -f /var/lib/apt/lists/*_*

# Install pandoc
RUN TEMP_DEB="$(mktemp)" &&\
  wget -O "$TEMP_DEB" https://github.com/jgm/pandoc/releases/download/2.10.1/pandoc-2.10.1-1-amd64.deb &&\
  dpkg -i "$TEMP_DEB" &&\
  rm -f "$TEMP_DEB"

# Install Visual Studio LiveShare
RUN wget -O ~/vsls-reqs https://aka.ms/vsls-linux-prereq-script &&\
  chmod +x ~/vsls-reqs &&\
  ~/vsls-reqs

WORKDIR /app

# Install Dependencies
COPY package.json .
COPY yarn.lock .
RUN yarn install --cache-folder ./node_modules

# Load the codebase to the /app folder of the Docker image
COPY . .

ENTRYPOINT [ "./docker/entrypoint.sh" ]

CMD [ "tail", "-f", "/dev/null"]

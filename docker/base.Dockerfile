FROM python:3.8

# Add Node repositories
RUN curl -sL https://deb.nodesource.com/setup_12.x | bash -
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list

# Install Poetry for Python
RUN curl -sSL https://raw.githubusercontent.com/python-poetry/poetry/master/get-poetry.py | python
ENV PATH "/root/.poetry/bin:/opt/venv/bin:${PATH}"

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

# Install Dependencies
WORKDIR /app

COPY package.json .
COPY yarn.lock .
RUN yarn install

COPY pyproject.toml .
COPY poetry.lock .
RUN poetry install

COPY . .

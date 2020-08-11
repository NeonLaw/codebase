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
  apt-get -qqyy install pandoc nodejs yarn ncat postgresql postgresql-contrib &&\
  apt-get clean &&\
  rm -f /var/lib/apt/lists/*_*

# Install Dependencies
WORKDIR /app

COPY package.json .
COPY yarn.lock .
RUN yarn install

COPY pyproject.toml .
COPY poetry.lock .
RUN poetry install

COPY . .

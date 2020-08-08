FROM nikolaik/python-nodejs:python3.8-nodejs12

RUN curl -sSL https://raw.githubusercontent.com/python-poetry/poetry/master/get-poetry.py | python
ENV PATH "/root/.poetry/bin:/opt/venv/bin:${PATH}"

# Install dependencies from apt.
RUN apt-get update -qq \
  && apt-get install -y postgresql postgresql-contrib \
  && apt-get clean \
  && rm -f /var/lib/apt/lists/*_*

WORKDIR /app

COPY package.json .
COPY yarn.lock .
RUN yarn install

COPY pyproject.toml .
COPY poetry.lock .
RUN poetry install

COPY . .

ENTRYPOINT [ "./docker/shell.entrypoint.sh" ]

CMD [ "tail", "-f", "/dev/null"]

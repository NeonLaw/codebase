FROM docker.pkg.github.com/neonlaw/codebase/base:latest

RUN (curl -Ls https://cli.doppler.com/install.sh || wget -qO- https://cli.doppler.com/install.sh) | sh

WORKDIR /app

COPY package.json .
COPY yarn.lock .
RUN yarn install --silent --ignore-optional

WORKDIR /app/web

COPY ./web ./

RUN yarn build

EXPOSE 3000
ENTRYPOINT [ "doppler", "run", "--" ]
CMD [ "yarn", "start" ]

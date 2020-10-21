import * as sapper from '@sapper/server';

import compression from 'compression';
import fetch from 'node-fetch';
import polka from 'polka';
import sirv from 'sirv';

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

// @ts-ignore
global.fetch = fetch;

polka() // You can also use Express
  .use(
    compression({ threshold: 0 }),
    sirv('static', { dev }),
    sapper.middleware(),
  )
  .listen(PORT, (err) => {
    if (err) console.log('error', err);
  });

import { Elysia } from 'elysia';
// import { html } from '@elysiajs/html';

import { staticPlugin } from '@elysiajs/static';

const API = new Elysia({
  // prefix: `/api/${process.env.API_VERSION}`,
  normalize: true,
})
  // .use(html())

  .use(
    staticPlugin({
      prefix: '/',
    }),
  )

  .get('/', ({ redirect }) => redirect('/api/v1/get-started'))
  .get('/api/v1', () => 'Hello Elysia')
  .get('/api/v1/get-started', ({ redirect }) => redirect('/index.html'))
  .listen(3000);

console.log(
  `🦊 Elysia is running at http://${API.server?.hostname}:${API.server?.port}/api/${process.env.API_VERSION}`,
);

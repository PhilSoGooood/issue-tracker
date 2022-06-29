import { createProxyMiddleware } from 'http-proxy-middleware';

export default function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://144.24.86.236',
      changeOrigin: true,
    }),
  );
}

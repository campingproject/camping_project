const http = require('http');
const { parse } = require('url');
const next = require('next');

const https = require('https');
const fs = require('fs');

const PORT = 3000;
const HOST_NAME = 'api.campinggo.store';
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev, hostname: HOST_NAME, port: PORT });
const handle = app.getRequestHandler();

const httpsOptions = {
  key: fs.readFileSync('./api.campinggo.store+2-key.pem'),
  cert: fs.readFileSync('./api.campinggo.store+2.pem'),
};

app.prepare().then(() => {
  // http
  //   .createServer((req, res) => {
  //     const parsedUrl = parse(req.url, true);
  //     handle(req, res, parsedUrl);
  //   })
  //   .listen(PORT, (err) => {
  //     if (err) throw err;
  //     console.log(`> Ready on http://localhost:${PORT}`);
  //   });

  // https 서버 추가
  https
    .createServer(httpsOptions, (req, res) => {
      const parsedUrl = parse(req.url, true);
      handle(req, res, parsedUrl);
    })
    .listen(PORT, (err) => {
      if (err) throw err;
      console.log(`> HTTPS: Ready on https://${HOST_NAME}:${PORT}`);
    });
});

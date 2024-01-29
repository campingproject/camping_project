const http = require('http');
const { parse } = require('url');
const next = require('next');

const https = require('https');
const fs = require('fs');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const httpPort = 3000;
const httpsPort = 3001;

const httpsOptions = {
  key: fs.readFileSync('./key.pem'),
  cert: fs.readFileSync('./cert.pem'),
};

app.prepare().then(() => {
  http
    .createServer((req, res) => {
      const parsedUrl = parse(req.url, true);
      handle(req, res, parsedUrl);
    })
    .listen(httpPort, (err) => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${httpPort}`);
    });

  // https 서버 추가
  https
    .createServer(httpsOptions, (req, res) => {
      const parsedUrl = parse(req.url, true);
      handle(req, res, parsedUrl);
    })
    .listen(httpsPort, (err) => {
      if (err) throw err;
      console.log(`> HTTPS: Ready on https://localhost:${httpsPort}`);
    });
});

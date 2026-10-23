// Local-only static server for browser QA. Run from repository root:
// node visual-editor/tests/serve.cjs [port]
const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..', '..');
const port = Number(process.argv[2]) || 4173;
const types = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.json': 'application/json; charset=utf-8', '.svg': 'image/svg+xml', '.png': 'image/png', '.webp': 'image/webp', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg' };
http.createServer((request, response) => {
  const requested = decodeURIComponent(new URL(request.url, `http://${request.headers.host}`).pathname);
  const relative = requested.replace(/^\/+/, '') || 'index.html';
  const file = path.resolve(root, relative);
  if (!file.startsWith(root + path.sep)) { response.writeHead(403).end('Forbidden'); return; }
  fs.readFile(file, (error, data) => {
    if (error) { response.writeHead(error.code === 'ENOENT' ? 404 : 500).end('Not found'); return; }
    response.writeHead(200, { 'Content-Type': types[path.extname(file).toLowerCase()] || 'application/octet-stream', 'Cache-Control': 'no-store' }); response.end(data);
  });
}).listen(port, '0.0.0.0', () => console.log(`QA server http://127.0.0.1:${port}`));

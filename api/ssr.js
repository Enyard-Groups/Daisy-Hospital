import serverModule from '../dist/server/server.js';

const server = serverModule.default ?? serverModule;

export default async function handler(req, res) {
  try {
    const protocol = req.headers['x-forwarded-proto'] || 'https';
    const host = req.headers.host;
    const url = new URL(req.url, `${protocol}://${host}`);

    const init = {
      method: req.method,
      headers: req.headers,
      body: req.method === 'GET' || req.method === 'HEAD' ? undefined : req
    };

    const request = new Request(url.toString(), init);

    const response = await server.fetch(request, {}, {});

    // forward status and headers
    res.statusCode = response.status;
    for (const [k, v] of response.headers.entries()) {
      // Node's res.setHeader expects string or string[]
      res.setHeader(k, v);
    }

    const buf = await response.arrayBuffer();
    res.end(Buffer.from(buf));
  } catch (err) {
    console.error('SSR handler error:', err);
    res.statusCode = 500;
    res.setHeader('content-type', 'text/plain');
    res.end('Internal Server Error');
  }
}

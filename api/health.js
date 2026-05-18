export default function handler(req, res) {
  res.setHeader('content-type', 'application/json');
  res.statusCode = 200;
  res.end(JSON.stringify({ status: 'ok', time: new Date().toISOString() }));
}

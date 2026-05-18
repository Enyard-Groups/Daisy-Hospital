import fs from 'fs/promises';
import path from 'path';

const clientDir = path.resolve('dist', 'client');
const assetsDir = path.join(clientDir, 'assets');

async function main() {
  try {
    const files = await fs.readdir(assetsDir);
    const js = files.find(f => /^index.*\.js$/.test(f)) || files.find(f => f.endsWith('.js'));
    const css = files.find(f => /^index.*\.css$/.test(f)) || files.find(f => f.endsWith('.css'));
    if (!js) {
      console.error('No JS asset found in', assetsDir);
      process.exit(1);
    }

    const html = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  ${css ? `<link rel="stylesheet" href="/assets/${css}">` : ''}
  <title>Daisy Hospital</title>
</head>
<body>
  <div id="root"></div>
  <script type="module" src="/assets/${js}"></script>
</body>
</html>`;

    await fs.mkdir(clientDir, { recursive: true });
    await fs.writeFile(path.join(clientDir, 'index.html'), html, 'utf8');
    console.log('Wrote', path.join(clientDir, 'index.html'));
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

main();

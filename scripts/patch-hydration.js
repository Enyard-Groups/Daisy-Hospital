import fs from 'fs/promises';
import path from 'path';

async function main() {
  const dir = path.resolve('dist', 'client', 'assets');
  try {
    const files = await fs.readdir(dir);
    for (const f of files) {
      if (!f.endsWith('.js')) continue;
      const p = path.join(dir, f);
      let txt = await fs.readFile(p, 'utf8');
      if (txt.includes('.hydrateRoot(document,')) {
        txt = txt.replace(/\.hydrateRoot\(document,/g, '.createRoot(document.getElementById("root")||document.body).render(');
        await fs.writeFile(p, txt, 'utf8');
        console.log('Patched', p);
      }
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

main();

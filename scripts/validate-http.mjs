import { readdirSync } from 'node:fs';
import { dirname, extname, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const publicDir = join(root, 'public');
const baseUrl = new URL(process.argv[2] || 'http://127.0.0.1:5500/public/');
const supported = new Set(['.html', '.css', '.js', '.pdf', '.svg', '.webmanifest']);

function files(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) return files(path);
    return entry.isFile() && supported.has(extname(path)) ? [path] : [];
  });
}

const resources = files(publicDir);
const failures = [];
const statusCounts = new Map();

for (let index = 0; index < resources.length; index += 20) {
  const batch = resources.slice(index, index + 20);
  await Promise.all(batch.map(async (file) => {
    const publicPath = relative(publicDir, file).replaceAll('\\', '/');
    const url = new URL(publicPath.split('/').map(encodeURIComponent).join('/'), baseUrl);
    try {
      const response = await fetch(url, { method: 'HEAD', cache: 'no-store' });
      statusCounts.set(response.status, (statusCounts.get(response.status) || 0) + 1);
      if (response.status !== 200) failures.push(`${response.status} ${url.href}`);
    } catch (error) {
      failures.push(`ERRO ${url.href}: ${error.message}`);
    }
  }));
}

const pdfCount = resources.filter((file) => extname(file) === '.pdf').length;
if (failures.length) {
  console.error(failures.map((failure) => `✗ ${failure}`).join('\n'));
  process.exitCode = 1;
} else {
  console.log(`✓ ${resources.length} recursos responderam HTTP 200`);
  console.log(`✓ ${pdfCount} PDFs responderam HTTP 200`);
  console.log(`✓ status: ${[...statusCounts].map(([status, count]) => `${status}=${count}`).join(' · ')}`);
}

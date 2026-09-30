// CSS files are consumed by the app's Tailwind build (not bundled); ship them verbatim.
import { cpSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
const root = join(dirname(fileURLToPath(import.meta.url)), '..');
mkdirSync(join(root, 'dist/hoff'), { recursive: true });
for (const f of ['theme.css', 'utilities.css', 'hoff/tokens.css', 'hoff/core.css']) cpSync(join(root, 'src', f), join(root, 'dist', f));
console.log('css copied to dist/');

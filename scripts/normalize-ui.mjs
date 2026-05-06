#!/usr/bin/env node
// Normalize flat files under src/components/ui/ to the Name/index.tsx convention.
// Renames Foo.tsx -> Foo/index.tsx (capitalizing the first letter), and rewrites
// any '@/components/ui/foo' imports across src/ to '@/components/ui/Foo'.

import { readdirSync, statSync, mkdirSync, renameSync, readFileSync, writeFileSync } from 'node:fs';
import { join, dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const uiDir = join(root, 'src/components/ui');
const srcDir = join(root, 'src');

const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);

const moves = [];
for (const entry of readdirSync(uiDir)) {
  const full = join(uiDir, entry);
  if (!statSync(full).isFile()) continue;
  if (!entry.endsWith('.tsx') && !entry.endsWith('.ts')) continue;

  const ext = entry.endsWith('.tsx') ? '.tsx' : '.ts';
  const base = entry.slice(0, -ext.length);
  const newName = capitalize(base);
  const newDir = join(uiDir, newName);

  mkdirSync(newDir, { recursive: true });
  renameSync(full, join(newDir, `index${ext}`));
  moves.push({ oldName: base, newName });
  console.log(`moved: ui/${entry} -> ui/${newName}/index${ext}`);
}

if (moves.length === 0) {
  console.log('no flat files to normalize.');
  process.exit(0);
}

const walk = (dir) => {
  const out = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    const s = statSync(full);
    if (s.isDirectory()) out.push(...walk(full));
    else if (entry.endsWith('.tsx') || entry.endsWith('.ts')) out.push(full);
  }
  return out;
};

let rewriteCount = 0;
for (const file of walk(srcDir)) {
  let text = readFileSync(file, 'utf8');
  let changed = false;
  for (const { oldName, newName } of moves) {
    if (oldName === newName) continue;
    const pattern = new RegExp(`(['"\`])@/components/ui/${oldName}\\1`, 'g');
    const next = text.replace(pattern, `$1@/components/ui/${newName}$1`);
    if (next !== text) { text = next; changed = true; }
  }
  if (changed) {
    writeFileSync(file, text);
    rewriteCount++;
    console.log(`rewrote imports: ${file.replace(root + '/', '')}`);
  }
}

console.log(`\ndone. moved ${moves.length} file(s), rewrote ${rewriteCount} import site(s).`);

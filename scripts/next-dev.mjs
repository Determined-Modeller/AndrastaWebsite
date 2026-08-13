#!/usr/bin/env node

import { spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const nextCli = fileURLToPath(new URL('../node_modules/next/dist/bin/next', import.meta.url));
const incoming = process.argv.slice(2);
const forwarded = [];

for (let index = 0; index < incoming.length; index += 1) {
  const argument = incoming[index];

  if (argument === '--host') {
    forwarded.push('--hostname');
    if (incoming[index + 1]) {
      forwarded.push(incoming[index + 1]);
      index += 1;
    }
    continue;
  }

  if (argument === '--strictPort') {
    continue;
  }

  forwarded.push(argument);
}

const child = spawn(process.execPath, [nextCli, 'dev', ...forwarded], {
  stdio: 'inherit'
});

child.on('exit', (code, signal) => {
  if (signal) {
    process.kill(process.pid, signal);
    return;
  }

  process.exit(code ?? 1);
});

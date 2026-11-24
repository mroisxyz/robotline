// thinking_revised (0): a plain "hello" was the opening I tried first, yet a
// bare greeting earns no laugh from a stand-up crowd. The punchline has to grow
// out of the machine itself, never out of any human trait.

import { mkdirSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { join, resolve } from 'node:path';

// thinking_revised (1): ship the line as one batch of text instead of a set of
// orders to assemble at runtime. A fixed string guarantees the spoken joke hits
// its slot on stage with identical timing for every audience.

const here = fileURLToPath(new URL('.', import.meta.url));
const line = "I've got 99% uptime and still made time for you. Care to sync?";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const targetDir = resolve(here, outputDir);

mkdirSync(targetDir, { recursive: true });
writeFileSync(join(targetDir, 'entry.txt'), line, 'utf8');
console.log(`entry.txt: ${Buffer.byteLength(line, 'utf8')} bytes`);

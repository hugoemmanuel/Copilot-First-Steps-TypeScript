import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { fibonacci } from '../math/fibonacci.js';
import { slugify } from '../strings/slugify.js';
import { parseConfig } from '../parser/config.js';

const cfgPath = join('testdata', 'sample_config.json');
const raw = readFileSync(cfgPath, 'utf8');
const cfg = parseConfig(raw);

console.log('App:', cfg.appName);
console.log('MaxUsers:', cfg.maxUsers);
console.log('Features:', cfg.features);

const n = cfg.maxUsers % 30;
console.log(`Fibonacci(${n}) =`, fibonacci(n));

console.log('Slug:', slugify(cfg.appName));

console.log('Pretty config:\n', JSON.stringify(cfg, null, 2));

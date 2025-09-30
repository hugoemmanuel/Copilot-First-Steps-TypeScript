import test from 'node:test';
import assert from 'node:assert/strict';
import { parseConfig } from '../dist/src/parser/config.js';

test('parseConfig basic', () => {
  const raw = JSON.stringify({ appName: 'Kata App', maxUsers: 5, features: ['auth'], threshold: 0.5 });
  const cfg = parseConfig(raw);
  assert.equal(cfg.appName, 'Kata App');
  assert.equal(cfg.maxUsers, 5);
  assert.deepEqual(cfg.features, ['auth']);
});

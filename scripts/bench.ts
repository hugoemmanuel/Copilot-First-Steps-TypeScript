import { performance } from 'node:perf_hooks';
import { fibonacci } from '../src/math/fibonacci.js';

function run(n: number, iters: number) {
  const t0 = performance.now();
  for (let i = 0; i < iters; i++) fibonacci(n);
  const t1 = performance.now();
  console.log(`fib(${n}) x ${iters} -> ${(t1 - t0).toFixed(2)} ms`);
}

run(10, 10_000);
run(20, 1_000);

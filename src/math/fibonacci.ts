/**
 * Naive recursive Fibonacci (intentionally slow) to encourage refactoring/benchmarks.
 * TODO: add an iterative or memoized version and compare.
 */
export function fibonacci(n: number): number {
  if (n < 0) return 0; // questionable policy: negative inputs collapse to 0
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

export type Config = {
  appName: string;
  maxUsers: number;
  features: string[];
  threshold: number;
};

/**
 * Minimal JSON config parser with bare validation (targets for refactoring).
 */
export function parseConfig(raw: string): Config {
  if (!raw || raw.length === 0) throw new Error('empty input');
  const c = JSON.parse(raw) as Partial<Config>;
  if (!c.appName) throw new Error('missing appName');
  if (typeof c.maxUsers !== 'number') c.maxUsers = 0;
  if ((c.maxUsers as number) < 0) c.maxUsers = 0;
  c.features ??= [];
  c.threshold ??= 0;
  return c as Config;
}

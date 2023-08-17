/**
 * Get return type of Promise.
 *
 * @example
 * const doSomething = async (): Promise<string|number> => {
 *   return 'result';
 * }
 *
 * type Something = PromiseReturnType<typeof doSomething>;
 * // string|number
 */
export type PromiseReturnType<F extends Function> = F extends (
  ...args: any[]
) => Promise<infer R>
  ? R
  : never;

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
export type PromiseReturnType<F extends (...args: any[]) => Promise<any>> =
  Awaited<ReturnType<F>>;

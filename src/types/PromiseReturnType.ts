import { AsyncReturnType } from './AsyncReturnType';

/**
 * Get return type of function that returns Promise ((...args: any) => Promise<any>).
 *
 * @deprecated use {@link AsyncReturnType} instead
 */
export type PromiseReturnType<F extends (...args: any[]) => Promise<any>> =
  AsyncReturnType<F>;

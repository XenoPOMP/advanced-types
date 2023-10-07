import { AsyncReturnType } from './AsyncReturnType';

/**
 * Get return type of function that returns Promise ((...args: any) => Promise<any>).
 *
 * @deprecated Use {@link AsyncReturnType} instead
 */
export type PromiseReturnType<F extends (...args: any[]) => Promise<any>> =
  AsyncReturnType<F>;

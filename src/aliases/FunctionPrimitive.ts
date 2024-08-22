import { Fn } from '../deprecation';

/**
 * This type is function primitive that you can use as type `extends` constraint.
 *
 * @deprecated Use {@link Fn} instead
 *
 * @example
 * type QueryConstant<
 *   K extends string,
 *   F extends FunctionPrimitive
 * > = ...
 *
 * // FunctionPrimitive = (...args: any[]) => any
 */
export type FunctionPrimitive<R extends any = any> = (...args: any[]) => R;

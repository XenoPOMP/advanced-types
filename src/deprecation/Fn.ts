import { FunctionPrimitive } from '../aliases';

/**
 * This type is function primitive that you can use as type `extends` constraint.
 * @example
 * type QueryConstant<
 *   K extends string,
 *   F extends Fn
 * > = ...
 *
 * // Fn = (...args: any[]) => any
 */
export type Fn<R> = FunctionPrimitive<R>;

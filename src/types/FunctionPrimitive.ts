/**
 * This type is function primitive that you can use as type `extends` constraint.
 *
 * @example
 * export type QueryConstant<
 *   K extends string,
 *   F extends FunctionPrimitive
 * > = ...
 *
 * // FunctionPrimitive = (...args: any[]) => any
 */
export type FunctionPrimitive = (...args: any[]) => any;

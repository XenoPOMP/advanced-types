/**
 * This type gets type of array.
 *
 * @example
 * type Super = ArrayType<string[]>; // string
 *
 * type Good = ArrayType<(string|number)[]>; // string | number
 */
export type ArrayType<T> = T extends Array<infer A> ? A : never;

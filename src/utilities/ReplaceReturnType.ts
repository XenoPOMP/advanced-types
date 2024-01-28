/**
 * This type replace return type of function with other type.
 *
 * @example
 * type StringFC<T = {}> = ReplaceReturnType<FC<T>, string>;
 */
export type ReplaceReturnType<TFn, TR> = TFn extends (...a: infer A) => any
  ? (...a: A) => TR
  : never;

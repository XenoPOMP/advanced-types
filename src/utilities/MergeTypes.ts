/**
 * Merge array of types to one type.
 */
export type MergeTypes<
  TypesArray extends any[],
  Res = {}
> = TypesArray extends [infer Head, ...infer Rem]
  ? MergeTypes<Rem, Res & Head>
  : Res;

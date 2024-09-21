import { MergeTypes } from './MergeTypes';

/**
 * Extracts first type from two generics. Is helper type for {@link OneOf} type.
 */
export type OnlyFirst<F, S> = F & { [Key in keyof Omit<S, keyof F>]?: never };

/**
 * Chooses only one of types array.
 */
export type OneOf<
  TypesArray extends any[],
  Res = never,
  AllProperties = MergeTypes<TypesArray>
> = TypesArray extends [infer Head, ...infer Rem]
  ? OneOf<Rem, Res | OnlyFirst<Head, AllProperties>, AllProperties>
  : Res;

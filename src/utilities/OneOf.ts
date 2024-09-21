/**
 * Extracts first type from two generics. Is helper type for {@link OneOf} type.
 */
export type OnlyFirst<F, S> = F & { [Key in keyof Omit<S, keyof F>]?: never };

/**
 * @TODO
 */
export type OneOf = unknown;

/**
 * Get typeof key of Record.
 *
 * @example
 * type Key = RecordKey<Record<string, number>>; // string
 */
export type RecordKey<R extends Record<any, any>> = R extends Record<
  infer K,
  any
>
  ? K
  : never;

/**
 * Recursevely add some type inside all keys of target type.
 *
 * @example
 * type Sups = DeepInject<{ supa: { sups: number } }, { _ignore: boolean }>;
 * const asp: Sups = { supa: { sups: 1, _ignore: false }, _ignore: false };
 */
export type DeepInject<T extends any, I extends object> = T extends object
  ? {
      [K in keyof T]: T[K] extends object
        ? T[K] & I & DeepInject<T[K], I>
        : T[K];
    } & I
  : T;

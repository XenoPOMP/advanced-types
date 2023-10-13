/**
 * Removes readonly from type.
 */
export type Writeable<T> = { -readonly [P in keyof T]: T[P] };

/**
 * Removes readonly from type deeply.
 */
export type DeepWriteable<T> = {
  -readonly [P in keyof T]: DeepWriteable<T[P]>;
};

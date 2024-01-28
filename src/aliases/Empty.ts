/**
 * This type stands for empty object type.
 *
 * @example
 * const message: Empty = { type: string; }; // Will cause error.
 */
export type Empty = Record<PropertyKey, never>;

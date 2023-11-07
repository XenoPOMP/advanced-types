/**
 * This type describes Next parameters.
 */
export type NextParams<K extends string> = K extends undefined
  ? unknown
  : Record<K, string>;

/**
 * Adds property *__params__* of type {@link NextParams} with
 * defined parameter names (second generic argument. Is optional).
 *
 * @example
 * type Props = WithParams<{ args?: Array<number> }>;
 *
 * // unknown
 * const parameters: Props['params'] = {
 *   ...
 * };
 *
 * @example
 * type Props = WithParams<{ args?: Array<number> }, 'id'>;
 *
 * const parameters: Props['params'] = {
 *   id: '12',
 * };
 */
export type WithParams<T extends any, P extends string = undefined> = T & {
  params: NextParams<P>;
};

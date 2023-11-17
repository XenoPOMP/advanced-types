/**
 * This type describes Next parameters.
 */
export type NextParams<K extends string> = Record<
  Extract<K, PropertyKey>,
  string
>;

/**
 * Adds property *__params__* of type {@link NextParams} with
 * defined parameter names (second generic argument. Is optional).
 *
 * @see https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes#typescript
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

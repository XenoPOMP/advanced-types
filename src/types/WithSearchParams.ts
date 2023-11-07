import { NextParams, WithParams } from './WithParams';

/**
 * Works similar to {@link WithParams}, but adds
 * *__searchParams__* instead of *__params__*.
 *
 * @example
 * type Props = WithSearchParams<{ args?: Array<number> }>;
 *
 * // unknown
 * const parameters: Props['searchParams'] = {
 *   ...
 * };
 *
 * @example
 * type Props = WithSearchParams<{ args?: Array<number> }, 'id'>;
 *
 * const parameters: Props['searchParams'] = {
 *   id: '12',
 * };
 */
export type WithSearchParams<
  T extends any,
  P extends string = undefined
> = T & {
  searchParams: NextParams<P>;
};

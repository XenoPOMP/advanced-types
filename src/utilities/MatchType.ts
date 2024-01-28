/**
 * Checks if type **T** matches type **M**.
 *
 * @example Not matching
 * type ViewStyles = {
 *   paddingHorizontal: number
 * }
 *
 * type Styles = MatchType<{}, ViewStyles>; // TSERROR
 *
 * @example Matching
 * type ViewStyles = {
 *   paddingHorizontal: number;
 * };
 *
 * // No error
 * type Styles = MatchType<
 *   {
 *     paddingHorizontal: number;
 *   },
 *   ViewStyles
 * >;
 */
export type MatchType<T extends M, M extends any> = T extends M ? T : never;

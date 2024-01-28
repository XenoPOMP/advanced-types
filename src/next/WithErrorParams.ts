/**
 * This type describes Next error page params.
 */
export type NextErrorParams<E extends Error> = {
  error: E;
  reset: () => void;
};

/**
 * Adds property *_error_* (extends of Error) and
 * *_reset_* (reset function).
 *
 * @example
 * type Params = WithErrorParams<{ id: string; }, ReferenceError>;
 *
 * const parameters: Params = {
 *   id: '12',
 *
 *   // Next error
 *   error: new ReferenceError(),
 *   reset: () => {
 *     console.log('reset');
 *   },
 * };
 */
export type WithErrorParams<T extends any, E extends Error> = T &
  NextErrorParams<E>;

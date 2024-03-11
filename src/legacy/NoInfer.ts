import { NoInferLegacy } from './NoInfer-legacy';

/**
 * Implementation of type that will be built-in into TypeScript
 * in the future.
 *
 * Marks type as one that can not be used to infer.
 *
 * @example
 * // The problem of example below is that
 * // TypeScript instantiates TState by inferring it
 * // from initial and states keys,
 * // and eventually creates a union type between them.
 * //
 * // By using NoInfer you can exclude generic type from this
 * // process.
 * const createFSM = <TState extends string>(config: {
 *   initial: NoInfer<TState>;
 *   states: TState[];
 * }) => {};
 *
 * const example = createFSM({
 *   initial: 'not-allowed', // Will error
 *   states: ['open', 'closed'],
 * });
 *
 * @see https://youtu.be/QSIXYMIJkQg?si=EySLwUb23wowmEf_&t=371
 *
 * @deprecated TypeScript ^5.4 has own implementation of this type.
 */
export type NoInfer<T> = NoInferLegacy<T>;

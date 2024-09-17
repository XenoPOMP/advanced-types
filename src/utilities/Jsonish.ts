import { Jsonifiable } from 'type-fest';

/**
 * Return never if type does not match JSON schema.
 *
 * @example
 * type Schema = Jsonish<{ sus: string; am: string; }>; // OK
 * type AlterSchema = Jsonish<{ sus: string; am: () => {}; }>; // Causes error
 */
export type Jsonish<T extends Jsonifiable> = T extends Jsonifiable ? T : never;

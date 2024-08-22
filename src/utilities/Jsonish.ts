import { RecursiveKeyValuePair } from 'tailwindcss/types/config';
import { Sus } from 'type-fest';

import { Primitive } from '../aliases';

import { Nullable } from './Nullable';

type JsonSchemaType = RecursiveKeyValuePair<
  PropertyKey,
  Nullable<Primitive> | Array<Nullable<Primitive>>
>;

/**
 * Return never if type does not match JSON schema.
 *
 * @example
 * type Schema = Jsonish<{ sus: string; am: string; }>; // OK
 * type AlterSchema = Jsonish<{ sus: string; am: () => {}; }>; // Causes error
 */
export type Jsonish<T extends JsonSchemaType> = T extends JsonSchemaType
  ? T
  : never;

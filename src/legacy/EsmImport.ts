import { ComponentType } from 'react';

/**
 * This type is ES Module import alias.
 *
 * @deprecated
 */
export type EsmImport<Import extends any = ComponentType<any>> = () => Promise<{
  default: Import;
}>;

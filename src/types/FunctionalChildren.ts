import { ReactNode } from 'react';

/**
 * This type allows you to make children that can be function.
 *
 * @example
 * type Child = FunctionalChildren<[options: string]>;
 * // ReactNode | ((options: string) => ReactNode)
 */
export type FunctionalChildren<Args extends any[]> =
	| ReactNode
	| ((...args: Args) => ReactNode);

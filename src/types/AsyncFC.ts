import { FC, ReactNode } from 'react';

import { ReplaceReturnType } from './ReplaceReturnType';

/**
 * Same as **FC** (or FunctionalComponent), but it returns Promise.
 *
 * @example
 * const Header: AsyncFC<HeaderProps> = async ({}) => {
 *   // Do async stuff here...
 *
 *   return <div></div>;
 * };
 */
export type AsyncFC<T = {}> = ReplaceReturnType<FC<T>, Promise<ReactNode>>;

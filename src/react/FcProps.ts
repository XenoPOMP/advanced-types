import { FC } from 'react';

/**
 * Extracts type of props from FC type.
 */
export type FcProps<Comp> = Comp extends FC<infer Props> ? Props : never;

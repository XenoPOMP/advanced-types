import { FC } from 'react';

/**
 * Extracts type of props from FC type.
 *
 * @example
 * type Props = FcProps<FC<{ align?: boolean }>>;
 * //   ^? { align?: boolean }
 *
 * type VariableProps = FcProps<VariableFC<'button', { notAlign?: boolean }>>;
 * //   ^? {notAlign?: boolean} & Omit<ClassAttributes<HTMLButtonElement> & React.ButtonHTMLAttributes<HTMLButtonElement>, undefined>
 */
export type FcProps<Comp> = Comp extends FC<infer Props> ? Props : never;

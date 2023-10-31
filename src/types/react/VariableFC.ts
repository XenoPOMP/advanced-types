import { type ComponentProps, type ElementType, type FC } from 'react';

import { AsyncFC } from './AsyncFC';

/**
 * This type wraps ComponentProps<A> to your FC.
 *
 * * __A__  - element type
 * * __P__  - wrapping props
 * * __Ex__ - excluded component props (for example, if you do not want to include 'children' prop in component)
 *
 * @example
 * type VariableComponentPropsWithChildren = ComponentProps<VariableFC<'div'>>;
 * type VariableComponentPropsWithoutChildren = ComponentProps<VariableFC<'div', {}, 'children'>>;
 *
 * @example
 * // With children
 * const VariableComponent: VariableFC<'section', { variant?: 'default' }> = ({ variant, ...props }) => {
 *   return <section {...props}></section>
 * }
 *
 * @example
 * // Without children
 * const VariableComponent: VariableFC<'section', { variant?: 'default' }, 'children'> = ({ variant, ...props }) => {
 *   return (
 *    <section {...props}>
 *      <div>Insert your own children</div>
 *    </section>
 *   );
 * }
 */
export type VariableFC<
  A extends ElementType,
  P = {},
  Ex extends keyof ComponentProps<A> = undefined
> = FC<P & Omit<ComponentProps<A>, Ex>>;

/**
 * Works similar to {@link VariableFC}, but return type is Promise<ReactNode>;
 */
export type AsyncVariableFC<
  A extends ElementType,
  P = {},
  Ex extends keyof ComponentProps<A> = undefined
> = AsyncFC<P & Omit<ComponentProps<A>, Ex>>;

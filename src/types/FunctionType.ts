import { ReplaceReturnType } from './ReplaceReturnType';

/**
 * Constructs function type.
 *
 * @example
 * const doSomething: FunctionType<(text: string) => any, string> = text => {
 *   return text;
 * };
 *
 * @deprecated
 */
export type FunctionType<
  Function extends (...args: any[]) => any,
  Return extends any = ReturnType<Function>
> = Function extends (...args: any[]) => any
  ? ReplaceReturnType<Function, Return>
  : never;

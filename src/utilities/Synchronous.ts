import { ReplaceReturnType } from './ReplaceReturnType';

/**
 * Make any async func synchronous.
 *
 * Return never, if __Func__ is not a function, actually.
 *
 * @example
 * type NormalFunc = Synchronous<(one: string, two: number) => void>; // (one: string, two: number) => void
 * type AsyncFunc = Synchronous<(one: string, two: number) => Promise<void>>; // (one: string, two: number) => void
 * type NotAFunc = Synchronous<'sus'>; // never
 */
export type Synchronous<Func> = Func extends Function
  ? Func extends (...args: any[]) => Promise<infer Result>
    ? ReplaceReturnType<Func, Result>
    : Func
  : never;

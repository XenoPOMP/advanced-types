/**
 * The strict version of Omit. Allows to remove only
 * keys that are presented in T type.
 *
 * @example
 * type Tree = {
 *   height: number;
 *   age: number;
 *   name: string;
 * };
 *
 * // TS2344: Type 'weight' does not satisfy the constraint keyof Tree
 * type TreeInfo = StrictOmit<Tree, 'weight'>;
 *
 * // Works just like usual Omit
 * type CorrectTreeInfo = StrictOmit<Tree, 'name'>;
 */
export type StrictOmit<T, K extends keyof T> = Omit<T, K>;

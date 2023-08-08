# 🏗️ Advanced types

This library contains useful types for React and Node.js projects.

## Navigation

* [ArrayType](/#arraytype)
* [AsyncFC](/#asyncfc)
* [Defined](/#defined)
* [Empty](/#empty)
* [EsmImport](/#esmimport)
* [Modify](/#modify)
* [PropsWith](/#propswith)
* [RecordKey](/#recordkey)
* [RecordValue](/#recordvalue)
* [ReplaceReturnType](/#replacereturntype)
* [SelectivePartial](/#selectivepartial)
* [Undefinable](/#undefinable)

## ArrayType


This type gets type of array.

```ts

type Super = ArrayType<string[]>; // string

type Good = ArrayType<(string|number)[]>; // string | number

 ```

## AsyncFC


Same as **FC** (or FunctionalComponent), but it returns Promise.

```ts

const Header: AsyncFC<HeaderProps> = async ({}) => {

  // Do async stuff here...

  return <div></div>;

};

 ```

## Defined


Removes undefined from union type.

 

## Empty


This type stands for empty object type.

```ts

const message: Empty = { type: string; }; // Will cause error.

 ```

## EsmImport


This type is ES Module import alias.

 

## Modify


## PropsWith


Universal props` wrapper.

C generic is concatenation variant of type ConcatenationVariants.

P generic is input type that is being wrapped.

```ts

// Children

const NewProps: PropsWith<'children', {}> = {};

console.log(NewProps.children); // ReactNode

// Style

const NewProps: PropsWith<'style', {}> = {};

console.log(NewProps.style); // CSSProperties

// Multi

const NewProps: PropsWith<'children' | 'style', {}> = {};

console.log(NewProps.children); // ReactNode

console.log(NewProps.style); // CSSProperties

 ```

## RecordKey


Get typeof key of Record.

```ts

type Key = RecordKey<Record<string, number>>; // string

 ```

## RecordValue


Get typeof value of Record.

```ts

type Value = RecordValue<Record<string, number>>; // number

 ```

## ReplaceReturnType


This type replace return type of function with other type.

```ts

type StringFC<T = {}> = ReplaceReturnType<FC<T>, string>;

 ```

## SelectivePartial


Works as Partial, but makes only specified keys partial.

```ts

type Super = SelectivePartial<{

 name: string;

 address: {

   street: string;

   number: number

 }

}, 'address'>;

// Property 'address' will be partial.

 ```

## Undefinable


Makes type union of type T and undefined

 
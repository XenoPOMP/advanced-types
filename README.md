# 🏗️ Advanced types

This library contains useful types for React and Node.js projects.

## Navigation

* [ArrayType](/#arraytype)
* [AsyncFC](/#asyncfc)
* [Defined](/#defined)
* [Empty](/#empty)
* [EsmImport](/#esmimport)
* [FunctionType](/#functiontype)
* [Modify](/#modify)
* [Primitive](/#primitive)
* [PromiseReturnType](/#promisereturntype)
* [PropsWith](/#propswith)
* [RecordKey](/#recordkey)
* [RecordValue](/#recordvalue)
* [ReplaceReturnType](/#replacereturntype)
* [SelectivePartial](/#selectivepartial)
* [Undefinable](/#undefinable)

## ArrayType


## AsyncFC


## Defined


## Empty


This type stands for empty object type.

```ts

const message: Empty = { type: string; }; // Will cause error.

 ```

## EsmImport


This type is ES Module import alias.

 

## FunctionType


## Modify


## Primitive


Primitive types union.

 

## PromiseReturnType


Get return type of Promise.

```ts

const doSomething = async (): Promise<string|number> => {

  return 'result';

}

type Something = PromiseReturnType<typeof doSomething>;

// string|number

 ```

## PropsWith


## RecordKey


## RecordValue


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

 
# 🏗️ Advanced types

This library contains useful types for React and Node.js projects.

## Navigation

* [ArrayType](/#arraytype)
* [AsyncFC](/#asyncfc)
* [DeepInject](/#deepinject)
* [Defined](/#defined)
* [Empty](/#empty)
* [EsmImport](/#esmimport)
* [FunctionPrimitive](/#functionprimitive)
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


## DeepInject


Recursevely add some type inside all keys of target type.

```ts

type Sups = DeepInject<{ supa: { sups: number } }, { _ignore: boolean }>;

const asp: Sups = { supa: { sups: 1, _ignore: false }, _ignore: false };

 ```

## Defined


## Empty


This type stands for empty object type.

```ts

const message: Empty = { type: string; }; // Will cause error.

 ```

## EsmImport


This type is ES Module import alias.

 

## FunctionPrimitive


## FunctionType


## Modify


## Primitive


Primitive types union.

 

## PromiseReturnType


## PropsWith


## RecordKey


## RecordValue


## ReplaceReturnType


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

 
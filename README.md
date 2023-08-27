# 🏗️ Advanced types

This library contains useful types for React and Node.js projects.

## Navigation

* [ArrayType](/#arraytype)
* [AsyncFC](/#asyncfc)
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


This type gets type of array.

```ts

type Super = ArrayType<string[]>; // string

type Good = ArrayType<(string|number)[]>; // string | number

 ```

## AsyncFC


## Defined


## Empty


## EsmImport


## FunctionPrimitive


This type is function primitive that you can use as type `extends` constraint.

```ts

type QueryConstant<

  K extends string,

  F extends FunctionPrimitive

> = ...

// FunctionPrimitive = (...args: any[]) => any

 ```

## FunctionType


## Modify


## Primitive


## PromiseReturnType


## PropsWith


## RecordKey


## RecordValue


## ReplaceReturnType


## SelectivePartial


## Undefinable

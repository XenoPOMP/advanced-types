# 🏗️ Advanced types

This library contains useful types for React and Node.js projects.

## Navigation

* [ArrayType](/#arraytype)
* [AsyncFC](/#asyncfc)
* [Defined](/#defined)
* [Empty](/#empty)
* [EsmImport](/#esmimport)
* [QueryConstant](/#queryconstant)
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


## EsmImport


## QueryConstant


This type is function primitive that you can use as type `extends` constraint.

```ts

export type QueryConstant<

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

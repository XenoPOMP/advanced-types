# 🏗️ Advanced types

This library contains useful types for React and Node.js projects.

## ArrayType

This type gets type of array.

```ts
import { ArrayType } from "@xenopomp/advanced-types";

type Num = ArrayType<number[]>; // number
type Super = ArrayType<Array<string | number>>; // string | number
```

## Defined

Removes undefined from union type.

```ts
import { Defined } from "@xenopomp/advanced-types";

type Real = Defined<string | undefined>; // string
```

## Modify

Modifies K (Key) in T (Type), replace it with R (Replacement).

```ts
import { Modify } from "@xenopomp/advanced-types";

type Address = {
    address: {
        street: string;
        home: number;
    }
}

type FullAddress = Modify<{name: string} & Address, 'address', string>;
// {
//     name: string;
//     address: string;
// }
```

## Undefinable

Create union type of T and ``undefined``.

```ts
import { Undefinable } from "@xenopomp/advanced-types";

type Super = Undefinable<string>; // string | undefined
```

## PropsWith

Adds ``children``, ``style``, ``className`` or ``id`` prop(s) to type.

```ts
import { PropsWith } from "@xenopomp/advanced-types";

interface ButtonProps extends PropsWith<'children' | 'style', {}> {}
```

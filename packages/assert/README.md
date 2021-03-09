[![GitHub Workflow Status](https://img.shields.io/github/workflow/status/Shedevro/web-utils/CI?style=flat-square)](https://github.com/Shedevro/web-utils/actions?query=workflow%3A%22CI+Deploy%22)
[![Coveralls github](https://img.shields.io/coveralls/github/Shedevro/web-utils?style=flat-square)](https://coveralls.io/github/Shedevro/web-utils)
[![npm (scoped)](https://img.shields.io/npm/v/@shedevro/assert?style=flat-square)](https://www.npmjs.com/package/@shedevro/assert)
[![npm](https://img.shields.io/npm/dm/@shedevro/assert?color=orange&style=flat-square)](https://www.npmjs.com/package/@shedevro/assert)
[![GitHub stars](https://img.shields.io/github/stars/shedevro/web-utils?label=GitHub%20%E2%98%85&style=flat-square)](https://github.com/Shedevro/web-utils)


# Assert
Library provides assertion utility for better and safe coding.

**Features:**
* Right assertion return types:

  `Assert.someFn(value): asserts value is string` or `Assert.is.someFn(value): value is string` etc.

* Assert functions can be chained with [operators](#user-content-operators) (`is`, `all`, `nullOr`, `not`)
* throws WebUtilsAssertionError (extends from Error). Provides right stacktrace (especialy helpfull then coding with Angular to see links to .ts files)


## Installation
```sh
npm i @shedevro/assert --save
```


## Usage

First you should import the library

```typescript
import { Assert } from '@shedevro/assert';
```

***

### **Custom error messages**

Each function can be customized with you own error message.

Error message supports params injecting of assert functions arguments like input or expected values etc.

Most often the order of params matches the function arguments order.

For example:
 ```typescript
const someValue = 3;
Assert.greaterThan(someValue, 10, 'This value should be greater than {2}, but got {1}');
// throw error with message 'This value should be greater than 10, but got 3';
```


***

### **Functions**

Then you can choice needed function.


#### **Operators**

Almost all functions can be chained with different operators.

Moreover, you can combine them each other.

* `is` – modifies assert functions to return `true` or `false` as a result
* `all` – applies an assert function to a provided array
* `nullOr` – runs assertion only if input value is defined
* `not` – inverts assertion action


For example:
```typescript
// is
const someNumber = 10;
if (Assert.is.range(someNumber, 10, 15)) {
  ...
}


// all
class User {
  id: number;
  name: string;
}

const someArray = [new User(), new User];
Assert.all.instanceOf(someArray, User);

// ...futher actions


// nullOr
const someBoolean = null; // or undefined
Assert.nullOr.boolean(someBoolean);
// ...futher actions


// not
const someFunction = () => 123;
Assert.not.throws(someFunction, TypeError);


// combinations
Assert.is.nullOr.not.emptyString('some string');
Assert.not.endsWith('str', 'some suffix');
Assert.nullOr.all.greaterThan([10, 11, 12, 13], 5);
// ...and so on
```


***


### String Assertions

Method                                                        | Description
------------------------------------------------------------- | --------------------------------------------------
`string(value, message?: string)`                             | Ensures that value is a string
`emptyString(value, message?: string)`                        | Ensures that value is an empty string
`contains(value, subString: string, message?: string)`        | Ensures that value contains substring
`startsWith(value, prefix: string, message?: string)`         | Ensures that value starts with some prefix
`endsWith(value, suffix: string, message?: string)`           | Ensures that value ends with some suffix



### Number Assertions

Method                                                              | Description
------------------------------------------------------------------- | --------------------------------------------------
`number(value, message?: string)`                                   | Ensures that value is a number
`natural(value, message?: string)`                                  | Ensures that value is a natural number
`greaterThan(value, limit: number, message?: string)`               | Ensures that value is greater than limit
`greaterThanOrEqual(value, limit: number, message?: string)`        | Ensures that value is greater or equal to limit
`lessThan(value, limit: number, message?: string)`                  | Ensures that value is less than limit
`lessThanOrEqual(value, limit: number, message?: string)`           | Ensures that value is less or equal to limit
`range(value, min: number, max: number, message?: string)`          | Ensures that value is in range of min and max



### Boolean Assertions

Method                                                   | Description
-------------------------------------------------------- | --------------------------------------------------
`boolean(value, message?: string)`                       | Ensures that value is a boolean
`true(value, message?: string)`                          | Ensures that value is true
`false(value, message?: string)`                         | Ensures that value is false



### Object Assertions

Method                                                   | Description
-------------------------------------------------------- | --------------------------------------------------
`object(value, message?: string)`                        | Ensures that value is an object (`{}`, not `Array` or `null`)



### Function Assertions

Method                                                   | Description
-------------------------------------------------------- | --------------------------------------------------
`function(value, message?: string)`                      | Ensures that value is a function



### Array Assertions

Method                                                                   | Description
------------------------------------------------------------------------ | ----------------------------------------
`array(array, message?: string)`                                         | Ensures that value is an array
`oneOf(value, values, message?: string)`                                 | Ensures that value is one of values (`string`/`number` array)
`arrayLength(array, number: number, message?: string)`                   | Ensures that array length is equal to number
`arrayMinLength(array, limit: number, message?: string)`                 | Ensures that array length is not less than limit
`arrayMaxLength(array, limit: number, message?: string)`                 | Ensures that array length is not greater than limit
`arrayLengthBetween(array, min: number, max: number, message?: string)`  | Ensures that array length is inside a min and max



### Instance Assertions

Method                                                                   | Description
------------------------------------------------------------------------ | --------------------------------------------------
`instanceOf(value, instanceClass, message?: string)`                     | Ensures that value is an instance of some class
`instanceOfAny(value, instanceClasses, message?: string)`                | Ensures that value is an instance of any class



### RexExp Assertions

Method                                                   | Description
-------------------------------------------------------- | --------------------------------------------------
`match(value, regExp: RegExp, message?: string)`         | Ensures that value is match a regular expression



### Other Assertions

Method                                                                  | Description
----------------------------------------------------------------------- | --------------------------------------------------
`defined(value, message?: string)`                                      | Ensures that value is defined (**not** `null`, `undefined` or `NaN`)
`equal(value, expect, message?: string)`                                | Ensures that value is equal to expec (`value === expect`)
`throws(expression: () => any, errorClass?, message?: string)`          | Ensures that expression throws some error



# Authors
[Shedevro](https://github.com/Shedevro)

All credits for great idea to [@webmozart](https://github.com/webmozart) with his [webmozart/assert](https://github.com/webmozart/assert) for PHP!

# Contribute
If you have ideas on how to improve this library, you are welcome!

Please read [readme](https://github.com/Shedevro/web-utils) of root project directory.

# License
The content of this package is licensed under the [MIT license](https://github.com/Shedevro/web-utils/blob/master/LICENSE).

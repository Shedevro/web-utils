[![GitHub Workflow Status](https://img.shields.io/github/workflow/status/Shedevro/web-utils/CI?style=flat-square)](https://github.com/Shedevro/web-utils/actions?query=workflow%3ACI)
[![Coveralls github](https://img.shields.io/coveralls/github/Shedevro/web-utils?style=flat-square)](https://coveralls.io/github/Shedevro/web-utils)
[![npm (scoped)](https://img.shields.io/npm/v/@shedevro/assert?style=flat-square)](https://www.npmjs.com/package/@shedevro/assert)
[![npm](https://img.shields.io/npm/dm/@shedevro/assert?color=orange&style=flat-square)](https://www.npmjs.com/package/@shedevro/assert)
[![GitHub stars](https://img.shields.io/github/stars/shedevro/web-utils?label=GitHub%20%E2%98%85&style=flat-square)](https://github.com/Shedevro/web-utils)


# Assert
Library provides assertion utility for better and safe coding.

Some features:
* Assertion typing from typescript (`someAssert(value): asserts value is string` etc.)
* throws WebUtilsAssertionError (extends from Error). Provides right stacktrace (especialy helpfull then coding with Angular to see links to .ts files)


## Installation 
```sh
npm i @shedevro/assert --save
```


## Usage
**First you should import the library**
```typescript
import { Assert } from '@shedevro/assert';
```

***

### **Custom error messages**
Each function can be customized with you own error message.

Error message supports params injecting of assert functions like input or expected values etc.

Most often the order of params matches the function arguments order.

For example:
 ```typescript
const someValue = 3;
Assert.greaterThan(someValue, 10, 'This value should be greater than {2}, but got {1}');
```

***

### **Example**
```typescript
const stringValue: any = 'some string';

Assert.string(stringValue); // not throws error
const uppercasedValue = stringValue.toUppercase();

// OR
const mayBeStringValue: any = 123;
Assert.string(mayBeStringValue); // will throw 'expected value to be a string. Got: 123'
const uppercasedValue = mayBeStringValue.toUppercase(); // still can call toUppercase()  
...
```

***

### **Functions**

Than you can choice needed function.


##### **Operators**
Half of the functions can be chained with operator or even combined each other.

* `nullOr` – to run assertion than value is defined
* `not` – inverses assert action

For example:
```typescript
Assert.nullOr.boolean(value);
Assert.nullOr.not.emptyString(value);
Assert.not.defined(value);
```
This not throw error



### String Assertions

Method                                                        | Description
------------------------------------------------------------- | --------------------------------------------------
`string(value, customMessage?: string)`                       | Ensures that value is a string
`emptyString(value, customMessage?: string)`                  | Ensures that value is an empty string
`contains(value, subString: string, customMessage?: string)`  | Ensures that value contains substring
`startsWith(value, prefix: string, customMessage?: string)`   | Ensures that value starts with some prefix
`endsWith(value, suffix: string, customMessage?: string)`     | Ensures that value ends with some suffix


### Number Assertions

Method                                                              | Description
------------------------------------------------------------------- | --------------------------------------------------
`number(value, customMessage?: string)`                             | Ensures that value is a number
`natural(value, customMessage?: string)`                            | Ensures that value is a natural number
`greaterThan(value, limit: number, customMessage?: string)`         | Ensures that value is greater than limit
`greaterThanOrEqual(value, limit: number, customMessage?: string)`  | Ensures that value is greater or equal to limit
`lessThan(value, limit: number, customMessage?: string)`            | Ensures that value is less than limit
`lessThanOrEqual(value, limit: number, customMessage?: string)`     | Ensures that value is less or equal to limit
`range(value, min: number, max: number, customMessage?: string)`    | Ensures that value is in range of min and max


### Boolean Assertions

Method                                                   | Description
-------------------------------------------------------- | --------------------------------------------------
`boolean(value, customMessage?: string)`                 | Ensures that value is a boolean
`true(value, customMessage?: string)`                    | Ensures that value is true
`false(value, customMessage?: string)`                   | Ensures that value is false


### Object Assertions

Method                                                   | Description
-------------------------------------------------------- | --------------------------------------------------
`object(value, customMessage?: string)`                  | Ensures that value is an object (`{}`, not `Array` or `null`)


### Array Assertions

Method                                                                            | Description
--------------------------------------------------------------------------------- | ----------------------------------------
`array(array: T, customMessage?: string)`                                         | Ensures that value is an array
`oneOf(value, values: any[], customMessage?: string)`                             | Ensures that value is one of values
`arrayLength(array: T, number: number, customMessage?: string)`                   | Ensures that array length is equal to number
`arrayMinLength(array: T, limit: number, customMessage?: string)`                 | Ensures that array length is not less than limit
`arrayMaxLength(array: T, limit: number, customMessage?: string)`                 | Ensures that array length is not greater than limit
`arrayLengthBetween(array: T, min: number, max: number, customMessage?: string)`  | Ensures that array length is inside a min and max


### Insatnce Assertions

Method                                                                            | Description
--------------------------------------------------------------------------------- | --------------------------------------------------
`instanceOf(value, instanceClass: T, customMessage?: string)`                     | Ensures that value is an instance of some class
`instanceOfAny(value, instanceClasses: InstanceClass[], customMessage?: string)`  | Ensures that value is an instance of any class
`allAreInstanceOf(array: T[], instanceClass: T, customMessage?: string)`          | Ensures that arary values are all instance os some class


### Other Assertions

Method                                                                               | Description
------------------------------------------------------------------------------------ | --------------------------------------------------
`defined(value: T, customMessage?: string)`                                          | Ensures that value is defined (**not** `null` or `undefined`)
`equal(value, expect, customMessage?: string)`                                       | Ensures that value is equal to expec (`value === expect`)
`throws(expression: () => any, errorClass?: InstanceClass, customMessage?: string)`  | Ensures that expression throws some error


### Type Ensuress
##### Returns boolean.

Method                                      | Description
--------------------------------------------| --------------------------------------------------
`isString(value)`                           | Checks that value is a type of string
`isNumber(value)`                           | Checks that value is a type of number
`isBoolean(value)`                          | Checks that value is a type of boolean
`isFunction(value)`                         | Checks that value is a type of function
`isObject(value)`                           | Checks that value is a type of object (`{}`, not `Array` or `null`)
`isArray(value)`                            | Checks that value is array
`isDefined(value)`                          | Checks that value defined (**not** `null` or `undefined`)
`isUndefined(value)`                        | Checks that value not defined (`null` or `undefined`)


# Authors
[Shedevro](https://github.com/Shedevro)

All credits for great idea to [@webmozart](https://github.com/webmozart) with his [webmozart/assert](https://github.com/webmozart/assert) for PHP!

# Contribute
If you have ideas on how to improve this library, you are welcome!

Please read [readme](https://github.com/Shedevro/web-utils) of root project directory. 

# License
The content of this package is licensed under the [MIT license](https://github.com/Shedevro/web-utils/blob/master/LICENSE).

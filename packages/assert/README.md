[![GitHub Workflow Status](https://img.shields.io/github/workflow/status/Shedevro/web-utils/CI?style=flat-square)](https://github.com/Shedevro/web-utils/actions?query=workflow%3ACI)
[![Coveralls github](https://img.shields.io/coveralls/github/Shedevro/web-utils?style=flat-square)](https://coveralls.io/github/Shedevro/web-utils)
[![npm](https://img.shields.io/npm/dm/@shedevro/assert?color=orange&style=flat-square)](https://www.npmjs.com/package/@shedevro/assert)
[![GitHub stars](https://img.shields.io/github/stars/shedevro/web-utils?label=GitHub%20%E2%98%85&style=flat-square)](https://github.com/Shedevro/web-utils)


# Assert
Provides assertion utility for better coding


## Installation 
```sh
npm i @shedevro/assert --save
```


## Usage
Library uses typescript assert types like `someFunction(value): asserts value is string` etc.
```typescript
import { Assert } from '@shedevro/assert';

// some of functions
Assert.string(val);
Assert.number(val);
Assert.boolean(val);
Assert.array(val);
Assert.instance(val, SomeInstanceClass);
...
```
##### For example
```typescript
const stringValue = 'some string';

Assert.string(stringValue); // not throws error
const uppercasedValue = stringValue.toUppercase();

// OR
const mayBeStringValue = 123;
Assert.string(mayBeStringValue); // throws WebUtilsAssertionError (Error)
const uppercasedValue = mayBeStringValue.toUppercase();
...
```


## Build
`npm run build`


## Test
`npm test`

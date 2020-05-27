# Web utils (WIP)
Provides assertion utility for better coding


## Installation 
```sh
npm install @shedevro/web-utils --save
```


## Usage
Library uses typescript assert types `someFuntion(value): asserts value is string` and so on.
```typescript
import { Assert } from '@shedevro/web-utils';

// some of functions
Assert.string(val);
Assert.number(val);
Assert.booleanval);
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
Assert.string(mayBeStringValue); // throws Assertion error
const uppercasedValue = mayBeStringValue.toUppercase();
...
```


## Build
`npm run build`

## Test
`npm run test`

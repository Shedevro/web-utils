export type Array = {
  array<T extends any[]>(array: T | any, customMessage?: string): asserts array is T;
}

export type OneOf = {
  oneOf(value, values: (string | number)[], customMessage?: string): void;
}

export type ArrayLength = {
  arrayLength<T extends any[]>(
    array: T | any,
    number: number,
    customMessage?: string,
  ): asserts array is T;
}

export type ArrayMinLength = {
  arrayMinLength<T extends any[]>(
    array: T | any,
    limit: number,
    customMessage?: string,
  ): asserts array is T;
}

export type ArrayMaxLength = {
  arrayMaxLength<T extends any[]>(
    array: T | any,
    limit: number,
    customMessage?: string,
  ): asserts array is T;
}

export type ArrayLengthBetween = {
  arrayLengthBetween<T extends any[]>(
    array: T | any,
    min: number,
    max: number,
    customMessage?: string,
  ): asserts array is T;
}


export type ArrayFunctions =
  Array &
  OneOf &
  ArrayLength &
  ArrayMinLength &
  ArrayMaxLength &
  ArrayLengthBetween;

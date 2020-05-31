export type Number = {
  number(value, customMessage?: string): asserts value is number;
}

export type Natural = {
  natural(value, customMessage?: string): asserts value is number;
}

export type GreaterThan = {
  greaterThan(value, limit: number, customMessage?: string): asserts value is number;
}

export type GreaterThanOrEqual = {
  greaterThanOrEqual(value, limit: number, customMessage?: string): asserts value is number;
}

export type LessThan = {
  lessThan(value, limit: number, customMessage?: string): asserts value is number;
}

export type LessThanOrEqual = {
  lessThanOrEqual(value, limit: number, customMessage?: string): asserts value is number;
}

export type Range = {
  range(value, min: number, max: number, customMessage?: string): asserts value is number;
}


export type NumberFunctions =
  Number &
  Natural &
  GreaterThan &
  GreaterThanOrEqual &
  LessThan &
  LessThanOrEqual &
  Range;

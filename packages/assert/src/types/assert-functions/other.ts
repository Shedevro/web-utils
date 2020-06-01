import {InstanceClass} from '@shedevro/core';

export type Defined = {
  defined<T>(value: T, customMessage?: string): asserts value is NonNullable<T>;
}

export type Equal = {
  equal(value, expect, customMessage?: string): void;
}

export type Throws = {
  throws(expression: () => any, errorClass?: InstanceClass, customMessage?: string): void;
}


export type OtherFunctions =
  Defined &
  Equal &
  Throws;

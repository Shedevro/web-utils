import type {InstanceClass} from '@shedevro/core';


export type InstanceOf = {
  instanceOf<T extends InstanceClass>(
    value,
    instanceClass: T,
    customMessage?: string,
  ): asserts value is InstanceType<T>;
}

export type InstanceOfAny = {
  instanceOfAny(
    value,
    instanceClasses: InstanceClass[],
    customMessage?: string,
  ): void;
}

export type AllAreInstanceOf = {
  allAreInstanceOf<T extends InstanceClass>(
    array: T[] | any,
    instanceClass: T,
    customMessage?: string,
  ): asserts array is InstanceType<T>[];
}


export type InstanceFunctions =
  InstanceOf &
  InstanceOfAny &
  AllAreInstanceOf;

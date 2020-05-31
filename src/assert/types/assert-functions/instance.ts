import type {InstanceClass} from '../../../common/types/types';


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
    value: T[] | any,
    instanceClass: T,
    customMessage?: string,
  ): asserts value is InstanceType<T>[];
}


export type InstanceFunctions =
  InstanceOf &
  InstanceOfAny &
  AllAreInstanceOf;

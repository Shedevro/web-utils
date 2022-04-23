/* eslint-disable @typescript-eslint/no-explicit-any */

export type InstanceClass<ClassName = any> = new (...args: any[]) => ClassName;

export type InstanceClassWithArgs<ClassName = any, Args extends any[] = []> = new (...args: Args) => ClassName;

export type OneOfArray<T> = T extends (infer R)[] ? R : T;

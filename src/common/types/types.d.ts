type InstanceClass<ClassName = any> = new (...args: any[]) => ClassName;

type InstanceClassWithArgs<ClassName = any, Args extends any[] = []> = new (...args: Args) => ClassName;

type OneOfArray<T> = T extends (infer R)[] ? R : T;

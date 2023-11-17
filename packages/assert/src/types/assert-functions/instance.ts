import type { InstanceClass } from '@shedevro/core';


namespace InstanceOf {

  export namespace Asserts {

    export type One = {
      instanceOf<T extends InstanceClass>(
        value: unknown,
        instanceClass: T,
        message?: string,
      ): asserts value is InstanceType<T>;
    }

    export type OneNullable = {
      instanceOf<T extends InstanceClass>(
        value: unknown,
        instanceClass: T,
        message?: string,
      ): asserts value is InstanceType<T> | null;
    }

    export type Array = {
      instanceOf<T extends InstanceClass>(
        value: unknown,
        instanceClass: T,
        message?: string,
      ): asserts value is InstanceType<T>[];
    }

    export type ArrayNullable = {
      instanceOf<T extends InstanceClass>(
        value: unknown,
        instanceClass: T,
        message?: string,
      ): asserts value is InstanceType<T>[] | null;
    }

    export type Not = {
      instanceOf<T extends InstanceClass>(
        value: unknown,
        instanceClass: T,
        message?: string,
      ): void;
    }
  }


  export namespace ValueIs {

    export type One = {
      instanceOf<T extends InstanceClass>(
        value: unknown,
        instanceClass: T,
      ): value is InstanceType<T>;
    }

    export type OneNullable = {
      instanceOf<T extends InstanceClass>(
        value: unknown,
        instanceClass: T,
      ): value is InstanceType<T> | null;
    }

    export type Array = {
      instanceOf<T extends InstanceClass>(
        value: unknown,
        instanceClass: T,
      ): value is InstanceType<T>[];
    }

    export type ArrayNullable = {
      instanceOf<T extends InstanceClass>(
        value: unknown,
        instanceClass: T,
      ): value is InstanceType<T>[] | null;
    }

    export type Not = {
      instanceOf<T extends InstanceClass>(
        value: unknown,
        instanceClass: T,
      ): void;
    }
  }
}


namespace InstanceOfAny {

  export namespace Asserts {

    export type One = {
      instanceOfAny<T extends InstanceClass>(
        value: unknown,
        instanceClasses: T[],
        message?: string,
      ): asserts value is T;
    }

    export type OneNullable = {
      instanceOfAny<T extends InstanceClass>(
        value: unknown,
        instanceClasses: T[],
        message?: string,
      ): asserts value is T | null;
    }

    export type Array = {
      instanceOfAny<T extends InstanceClass>(
        value: unknown,
        instanceClasses: T[],
        message?: string,
      ): asserts value is T[];
    }

    export type ArrayNullable = {
      instanceOfAny<T extends InstanceClass>(
        value: unknown,
        instanceClasses: T[],
        message?: string,
      ): asserts value is T[] | null;
    }

    export type Not = {
      instanceOfAny<T extends InstanceClass>(
        value: unknown,
        instanceClasses: T[],
        message?: string,
      ): boolean;
    }
  }


  export namespace ValueIs {

    export type One = {
      instanceOfAny<T extends InstanceClass>(
        value: unknown,
        instanceClasses: T[],
      ): value is T;
    }

    export type OneNullable = {
      instanceOfAny<T extends InstanceClass>(
        value: unknown,
        instanceClasses: T[],
      ): value is T | null;
    }

    export type Array = {
      instanceOfAny<T extends InstanceClass>(
        value: unknown,
        instanceClasses: T[],
      ): value is T[];
    }

    export type ArrayNullable = {
      instanceOfAny<T extends InstanceClass>(
        value: unknown,
        instanceClasses: T[],
      ): value is T[] | null;
    }

    export type Not = {
      instanceOfAny<T extends InstanceClass>(
        value: unknown,
        instanceClasses: T[],
      ): boolean;
    }
  }
}



export namespace InstanceFunctions {

  export namespace Asserts {

    export type One =
      InstanceOf.Asserts.One &
      InstanceOfAny.Asserts.One;

    export type OneNullable =
      InstanceOf.Asserts.OneNullable &
      InstanceOfAny.Asserts.OneNullable;

    export type Array =
      InstanceOf.Asserts.Array &
      InstanceOfAny.Asserts.ArrayNullable;

    export type ArrayNullable =
      InstanceOf.Asserts.ArrayNullable &
      InstanceOfAny.Asserts.ArrayNullable;

    export type Not =
      InstanceOf.Asserts.Not &
      InstanceOfAny.Asserts.Not;
  }


  export namespace ValueIs {

    export type One =
      InstanceOf.ValueIs.One &
      InstanceOfAny.ValueIs.One;

    export type OneNullable =
      InstanceOf.ValueIs.OneNullable &
      InstanceOfAny.ValueIs.OneNullable;

    export type Array =
      InstanceOf.ValueIs.Array &
      InstanceOfAny.ValueIs.ArrayNullable;

    export type ArrayNullable =
      InstanceOf.ValueIs.ArrayNullable &
      InstanceOfAny.ValueIs.ArrayNullable;

    export type Not =
      InstanceOf.ValueIs.Not &
      InstanceOfAny.ValueIs.Not;
  }
}

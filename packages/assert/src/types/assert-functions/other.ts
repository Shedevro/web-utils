import {InstanceClass} from '@shedevro/core';


namespace Defined {

  export namespace Asserts {

    export type One = {
      defined<T>(value: T, message?: string): asserts value is NonNullable<T>;
    }

    export type Array = {
      defined<T>(value: T[], message?: string): asserts value is NonNullable<T[]>;
    }

    export type ArrayNullable = {
      defined<T>(value: T[] | any, message?: string): asserts value is NonNullable<T[]> | null;
    }

    export type Not = {
      defined(value, message?: string): asserts value is null | undefined;
    }
  }


  export namespace ValueIs {

    export type One = {
      defined<T>(value: T): value is NonNullable<T>;
    }

    export type Array = {
      defined<T>(value: T[]): value is NonNullable<T[]>;
    }

    export type ArrayNullable = {
      defined<T>(value: T[] | any): value is NonNullable<T[]> | null;
    }

    export type Not = {
      defined(value): value is null | undefined;
    }
  }
}


namespace Equal {

  export namespace Asserts {

    export type One = {
      equal(value, expect, message?: string): void;
    }
  }


  export namespace ValueIs {

    export type One = {
      equal(value, expect): boolean;
    }
  }
}


namespace Throws {

  export namespace Asserts {

    export type One = {
      throws(expression, expectedErrorClass?: InstanceClass, message?: string): void;
    }
  }


  export namespace ValueIs {

    export type One = {
      throws(expression, expectedErrorClass?: InstanceClass): boolean;
    }
  }
}



export namespace OtherFunctions {

  export namespace Asserts {

    export type One =
      Defined.Asserts.One &
      Equal.Asserts.One &
      Throws.Asserts.One;

    export type OneNullable =
      Equal.Asserts.One;

    export type Array =
      Defined.Asserts.Array;

    export type ArrayNullable =
      Defined.Asserts.ArrayNullable;

    export type Not =
      Defined.Asserts.Not &
      Equal.Asserts.One &
      Throws.Asserts.One;
  }


  export namespace ValueIs {

    export type One =
      Defined.ValueIs.One &
      Equal.ValueIs.One &
      Throws.ValueIs.One;

    export type OneNullable =
      Equal.ValueIs.One;

    export type Array =
      Defined.ValueIs.Array;

    export type ArrayNullable =
      Defined.ValueIs.ArrayNullable;

    export type Not =
      Defined.ValueIs.Not &
      Equal.ValueIs.One &
      Throws.ValueIs.One;
  }
}

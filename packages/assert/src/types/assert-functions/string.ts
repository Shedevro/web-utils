namespace Types {
  export type One = string;
  export type OneNullable = One | null;

  export type Array = One[];
  export type ArrayNullable = Array | null;
}


namespace String {

  export type AssertsTemplate<R> = {
    string(value: unknown, message?: string): asserts value is R;
  }

  export type ValueIsTemplate<R> = {
    string(value: unknown): value is R;
  }
}


namespace EmptyString {

  export type AssertsTemplate<R> = {
    emptyString(value: unknown, message?: string): asserts value is R;
  }

  export type ValueIsTemplate<R> = {
    emptyString(value: unknown): value is R;
  }
}


namespace Contains {

  export type AssertsTemplate<R> = {
    contains(value: unknown, subString: string, message?: string): asserts value is R;
  }

  export type ValueIsTemplate<R> = {
    contains(value: unknown, subString: string): value is R;
  }
}


namespace StartsWith {

  export type AssertsTemplate<R> = {
    startsWith(value: unknown, prefix: string, message?: string): asserts value is R;
  }

  export type ValueIsTemplate<R> = {
    startsWith(value: unknown, prefix: string): value is R;
  }
}


namespace EndsWith {

  export type AssertsTemplate<R> = {
    endsWith(value: unknown, suffix: string, message?: string): asserts value is R;
  }

  export type ValueIsTemplate<R> = {
    endsWith(value: unknown, suffix: string): value is R;
  }
}


namespace OneOf {

  export namespace Asserts {

    export type One = {
      oneOf<T extends string>(value: unknown, values: T[], message?: string): asserts value is T;
    }

    export type OneNullable = {
      oneOf<T extends string>(value: unknown, values: T[], message?: string): asserts value is T | null;
    }

    export type Array = {
      oneOf<T extends string>(value: unknown, values: T[], message?: string): asserts value is T[];
    }

    export type ArrayNullable = {
      oneOf<T extends string>(value: unknown, values: T[], message?: string): asserts value is T[] | null;
    }

    export type Not = {
      oneOf<T extends string>(value: unknown, values: T[], message?: string): void;
    }
  }


  export namespace ValueIs {

    export type One = {
      oneOf<T extends (string | number)>(value: unknown, values: T[]): value is T;
    }

    export type OneNullable = {
      oneOf<T extends (string | number)>(value: unknown, values: T[]): value is T | null;
    }

    export type Array = {
      oneOf<T extends (string | number)>(value: unknown, values: T[]): value is T[];
    }

    export type ArrayNullable = {
      oneOf<T extends (string | number)>(value: unknown, values: T[]): value is T[] | null;
    }

    export type Not = {
      oneOf<T extends (string | number)>(value: unknown, values: T[]): value is boolean;
    }
  }
}



export namespace StringFunctions {

  export namespace Asserts {

    export type One =
      String.AssertsTemplate<Types.One> &
      EmptyString.AssertsTemplate<Types.One> &
      Contains.AssertsTemplate<Types.One> &
      StartsWith.AssertsTemplate<Types.One> &
      EndsWith.AssertsTemplate<Types.One> &
      OneOf.Asserts.One;

    export type OneNullable =
      String.AssertsTemplate<Types.OneNullable> &
      EmptyString.AssertsTemplate<Types.OneNullable> &
      Contains.AssertsTemplate<Types.OneNullable> &
      StartsWith.AssertsTemplate<Types.OneNullable> &
      EndsWith.AssertsTemplate<Types.OneNullable> &
      OneOf.Asserts.OneNullable;

    export type Array =
      String.AssertsTemplate<Types.Array> &
      EmptyString.AssertsTemplate<Types.Array> &
      Contains.AssertsTemplate<Types.Array> &
      StartsWith.AssertsTemplate<Types.Array> &
      EndsWith.AssertsTemplate<Types.Array> &
      OneOf.Asserts.Array;

    export type ArrayNullable =
      String.AssertsTemplate<Types.ArrayNullable> &
      EmptyString.AssertsTemplate<Types.ArrayNullable> &
      Contains.AssertsTemplate<Types.ArrayNullable> &
      StartsWith.AssertsTemplate<Types.ArrayNullable> &
      EndsWith.AssertsTemplate<Types.ArrayNullable> &
      OneOf.Asserts.ArrayNullable;

    export type Not =
      EmptyString.AssertsTemplate<Types.One> &
      Contains.AssertsTemplate<Types.One> &
      StartsWith.AssertsTemplate<Types.One> &
      EndsWith.AssertsTemplate<Types.One> &
      OneOf.Asserts.Not;
  }


  export namespace ValueIs {

    export type One =
      String.ValueIsTemplate<Types.One> &
      EmptyString.ValueIsTemplate<Types.One> &
      Contains.ValueIsTemplate<Types.One> &
      StartsWith.ValueIsTemplate<Types.One> &
      EndsWith.ValueIsTemplate<Types.One> &
      OneOf.ValueIs.One;

    export type OneNullable =
      String.ValueIsTemplate<Types.OneNullable> &
      EmptyString.ValueIsTemplate<Types.OneNullable> &
      Contains.ValueIsTemplate<Types.OneNullable> &
      StartsWith.ValueIsTemplate<Types.OneNullable> &
      EndsWith.ValueIsTemplate<Types.OneNullable> &
      OneOf.ValueIs.OneNullable;

    export type Array =
      String.ValueIsTemplate<Types.Array> &
      EmptyString.ValueIsTemplate<Types.Array> &
      Contains.ValueIsTemplate<Types.Array> &
      StartsWith.ValueIsTemplate<Types.Array> &
      EndsWith.ValueIsTemplate<Types.Array> &
      OneOf.ValueIs.Array;

    export type ArrayNullable =
      String.ValueIsTemplate<Types.ArrayNullable> &
      EmptyString.ValueIsTemplate<Types.ArrayNullable> &
      Contains.ValueIsTemplate<Types.ArrayNullable> &
      StartsWith.ValueIsTemplate<Types.ArrayNullable> &
      EndsWith.ValueIsTemplate<Types.ArrayNullable> &
      OneOf.ValueIs.ArrayNullable;

    export type Not =
      EmptyString.ValueIsTemplate<Types.One> &
      Contains.ValueIsTemplate<Types.One> &
      StartsWith.ValueIsTemplate<Types.One> &
      EndsWith.ValueIsTemplate<Types.One> &
      OneOf.ValueIs.Not;
  }
}

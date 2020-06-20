namespace Types {
  export type One = string;
  export type OneNullable = One | null;

  export type Array = One[];
  export type ArrayNullable = Array | null;
}


namespace String {

  export type AssertsTemplate<R> = {
    string(value, message?: string): asserts value is R;
  }

  export type ValueIsTemplate<R> = {
    string(value): value is R;
  }
}


namespace EmptyString {

  export type AssertsTemplate<R> = {
    emptyString(value, message?: string): asserts value is R;
  }

  export type ValueIsTemplate<R> = {
    emptyString(value): value is R;
  }
}


namespace Contains {

  export type AssertsTemplate<R> = {
    contains(value, subString: string, message?: string): asserts value is R;
  }

  export type ValueIsTemplate<R> = {
    contains(value, subString: string): value is R;
  }
}


namespace StartsWith {

  export type AssertsTemplate<R> = {
    startsWith(value, prefix: string, message?: string): asserts value is R;
  }

  export type ValueIsTemplate<R> = {
    startsWith(value, prefix: string): value is R;
  }
}


namespace EndsWith {

  export type AssertsTemplate<R> = {
    endsWith(value, suffix: string, message?: string): asserts value is R;
  }

  export type ValueIsTemplate<R> = {
    endsWith(value, suffix: string): value is R;
  }
}



export namespace StringFunctions {

  export namespace Asserts {

    export type One =
      String.AssertsTemplate<Types.One> &
      EmptyString.AssertsTemplate<Types.One> &
      Contains.AssertsTemplate<Types.One> &
      StartsWith.AssertsTemplate<Types.One> &
      EndsWith.AssertsTemplate<Types.One>;

    export type OneNullable =
      String.AssertsTemplate<Types.OneNullable> &
      EmptyString.AssertsTemplate<Types.OneNullable> &
      Contains.AssertsTemplate<Types.OneNullable> &
      StartsWith.AssertsTemplate<Types.OneNullable> &
      EndsWith.AssertsTemplate<Types.OneNullable>;

    export type Array =
      String.AssertsTemplate<Types.Array> &
      EmptyString.AssertsTemplate<Types.Array> &
      Contains.AssertsTemplate<Types.Array> &
      StartsWith.AssertsTemplate<Types.Array> &
      EndsWith.AssertsTemplate<Types.Array>;

    export type ArrayNullable =
      String.AssertsTemplate<Types.ArrayNullable> &
      EmptyString.AssertsTemplate<Types.ArrayNullable> &
      Contains.AssertsTemplate<Types.ArrayNullable> &
      StartsWith.AssertsTemplate<Types.ArrayNullable> &
      EndsWith.AssertsTemplate<Types.ArrayNullable>;

    export type Not =
      EmptyString.AssertsTemplate<Types.One> &
      Contains.AssertsTemplate<Types.One> &
      StartsWith.AssertsTemplate<Types.One> &
      EndsWith.AssertsTemplate<Types.One>;
  }


  export namespace ValueIs {

    export type One =
      String.ValueIsTemplate<Types.One> &
      EmptyString.ValueIsTemplate<Types.One> &
      Contains.ValueIsTemplate<Types.One> &
      StartsWith.ValueIsTemplate<Types.One> &
      EndsWith.ValueIsTemplate<Types.One>;

    export type OneNullable =
      String.ValueIsTemplate<Types.OneNullable> &
      EmptyString.ValueIsTemplate<Types.OneNullable> &
      Contains.ValueIsTemplate<Types.OneNullable> &
      StartsWith.ValueIsTemplate<Types.OneNullable> &
      EndsWith.ValueIsTemplate<Types.OneNullable>;

    export type Array =
      String.ValueIsTemplate<Types.Array> &
      EmptyString.ValueIsTemplate<Types.Array> &
      Contains.ValueIsTemplate<Types.Array> &
      StartsWith.ValueIsTemplate<Types.Array> &
      EndsWith.ValueIsTemplate<Types.Array>;

    export type ArrayNullable =
      String.ValueIsTemplate<Types.ArrayNullable> &
      EmptyString.ValueIsTemplate<Types.ArrayNullable> &
      Contains.ValueIsTemplate<Types.ArrayNullable> &
      StartsWith.ValueIsTemplate<Types.ArrayNullable> &
      EndsWith.ValueIsTemplate<Types.ArrayNullable>;

    export type Not =
      EmptyString.ValueIsTemplate<Types.One> &
      Contains.ValueIsTemplate<Types.One> &
      StartsWith.ValueIsTemplate<Types.One> &
      EndsWith.ValueIsTemplate<Types.One>;
  }
}

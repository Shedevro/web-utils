namespace Types {
  export type One = Record<string, unknown>;
  export type OneNullable = One | null;

  export type Array = One[];
  export type ArrayNullable = Array | null;
}


namespace Object {

  export type AssertsTemplate<R> = {
    object(value: unknown, message?: string): asserts value is R;
  }

  export type ValueIsTemplate<R> = {
    object(value: unknown): value is R;
  }
}



export namespace ObjectFunctions {

  export namespace Asserts {

    export type One =
      Object.AssertsTemplate<Types.One>;

    export type OneNullable =
      Object.AssertsTemplate<Types.OneNullable>;

    export type Array =
      Object.AssertsTemplate<Types.Array>;

    export type ArrayNullable =
      Object.AssertsTemplate<Types.ArrayNullable>;
  }


  export namespace ValueIs {

    export type One =
      Object.ValueIsTemplate<Types.One>;

    export type OneNullable =
      Object.ValueIsTemplate<Types.OneNullable>;

    export type Array =
      Object.ValueIsTemplate<Types.Array>;

    export type ArrayNullable =
      Object.ValueIsTemplate<Types.ArrayNullable>;
  }
}

namespace Types {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export type One = (...args: any[]) => any;
  export type OneNullable = One | null;

  export type Array = One[];
  export type ArrayNullable = Array | null;
}


namespace Function {

  export type AssertsTemplate<R> = {
    function(value: unknown, message?: string): asserts value is R;
  }

  export type ValueIsTemplate<R> = {
    function(value: unknown): value is R;
  }
}



export namespace FunctionFunctions {

  export namespace Asserts {

    export type One =
      Function.AssertsTemplate<Types.One>;

    export type OneNullable =
      Function.AssertsTemplate<Types.OneNullable>;

    export type Array =
      Function.AssertsTemplate<Types.Array>;

    export type ArrayNullable =
      Function.AssertsTemplate<Types.ArrayNullable>;
  }


  export namespace ValueIs {

    export type One =
      Function.ValueIsTemplate<Types.One>;

    export type OneNullable =
      Function.ValueIsTemplate<Types.OneNullable>;

    export type Array =
      Function.ValueIsTemplate<Types.Array>;

    export type ArrayNullable =
      Function.ValueIsTemplate<Types.ArrayNullable>;
  }
}

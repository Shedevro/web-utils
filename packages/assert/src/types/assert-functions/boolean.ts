namespace Types {
  export type One<T extends boolean = boolean> = T;
  export type OneNullable<T extends boolean = boolean> = One | null;

  export type Array<T extends boolean = boolean> = One[];
  export type ArrayNullable<T extends boolean = boolean> = Array | null;
}


 namespace Boolean {

  export type AssertsTemplate<R> = {
    boolean(value, message?: string): asserts value is R;
  }

  export type ValueIsTemplate<R> = {
    boolean(value): value is R;
  }
}


namespace True {

  export type AssertsTemplate<R> = {
    true(value, message?: string): asserts value is R;
  }

  export type ValueIsTemplate<R> = {
    true(value): value is R;
  }
}


namespace False {

  export type AssertsTemplate<R> = {
    false(value, message?: string): asserts value is R;
  }

  export type ValueIsTemplate<R> = {
    false(value): value is R;
  }
}



export namespace BooleanFunctions {

  export namespace Asserts {

    export type One =
      Boolean.AssertsTemplate<Types.One> &
      True.AssertsTemplate<Types.One<true>> &
      False.AssertsTemplate<Types.One<false>>;

    export type OneNullable =
      Boolean.AssertsTemplate<Types.OneNullable> &
      True.AssertsTemplate<Types.OneNullable<true>> &
      False.AssertsTemplate<Types.OneNullable<false>>;

    export type Array =
      Boolean.AssertsTemplate<Types.Array> &
      True.AssertsTemplate<Types.Array<true>> &
      False.AssertsTemplate<Types.Array<false>>;

    export type ArrayNullable =
      Boolean.AssertsTemplate<Types.ArrayNullable> &
      True.AssertsTemplate<Types.ArrayNullable<true>> &
      False.AssertsTemplate<Types.ArrayNullable<false>>;
  }


  export namespace ValueIs {

    export type One =
      Boolean.ValueIsTemplate<Types.One> &
      True.ValueIsTemplate<Types.One<true>> &
      False.ValueIsTemplate<Types.One<false>>;

    export type OneNullable =
      Boolean.ValueIsTemplate<Types.OneNullable> &
      True.ValueIsTemplate<Types.OneNullable<true>> &
      False.ValueIsTemplate<Types.OneNullable<false>>;

    export type Array =
      Boolean.ValueIsTemplate<Types.Array> &
      True.ValueIsTemplate<Types.Array<true>> &
      False.ValueIsTemplate<Types.Array<false>>;

    export type ArrayNullable =
      Boolean.ValueIsTemplate<Types.ArrayNullable> &
      True.ValueIsTemplate<Types.ArrayNullable<true>> &
      False.ValueIsTemplate<Types.ArrayNullable<false>>;
  }
}

namespace Types {
  export type One = number;
  export type OneNullable = One | null;

  export type Array = One[];
  export type ArrayNullable = Array | null;
}


namespace Number {

  export type AssertsTemplate<R> = {
    number(value: unknown, message?: string): asserts value is R;
  }

  export type ValueIsTemplate<R> = {
    number(value: unknown): value is R;
  }
}


namespace Natural {

  export type AssertsTemplate<R> = {
    natural(value: unknown, message?: string): asserts value is R;
  }

  export type ValueIsTemplate<R> = {
    natural(value: unknown): value is R;
  }
}


namespace GreaterThan {

  export type AssertsTemplate<R> = {
    greaterThan(value: unknown, limit: number, message?: string): asserts value is R;
  }

  export type ValueIsTemplate<R> = {
    greaterThan(value: unknown, limit: number): value is R;
  }
}


namespace GreaterThanOrEqual {

  export type AssertsTemplate<R> = {
    greaterThanOrEqual(value: unknown, limit: number, message?: string): asserts value is R;
  }

  export type ValueIsTemplate<R> = {
    greaterThanOrEqual(value: unknown, limit: number): value is R;
  }
}


namespace LessThan {

  export type AssertsTemplate<R> = {
    lessThan(value: unknown, limit: number, message?: string): asserts value is R;
  }

  export type ValueIsTemplate<R> = {
    lessThan(value: unknown, limit: number): value is R;
  }
}


namespace LessThanOrEqual {

  export type AssertsTemplate<R> = {
    lessThanOrEqual(value: unknown, limit: number, message?: string): asserts value is R;
  }

  export type ValueIsTemplate<R> = {
    lessThanOrEqual(value: unknown, limit: number): value is R;
  }
}


namespace Range {

  export type AssertsTemplate<R> = {
    range(value: unknown, min: number, max: number, message?: string): asserts value is R;
  }

  export type ValueIsTemplate<R> = {
    range(value: unknown, min: number, max: number): value is R;
  }
}


export namespace NumberFunctions {

  export namespace Asserts {

    export type One =
      Number.AssertsTemplate<Types.One> &
      Natural.AssertsTemplate<Types.One> &
      GreaterThan.AssertsTemplate<Types.One> &
      GreaterThanOrEqual.AssertsTemplate<Types.One> &
      LessThan.AssertsTemplate<Types.One> &
      LessThanOrEqual.AssertsTemplate<Types.One> &
      Range.AssertsTemplate<Types.One>;

    export type OneNullable =
      Number.AssertsTemplate<Types.OneNullable> &
      Natural.AssertsTemplate<Types.OneNullable> &
      GreaterThan.AssertsTemplate<Types.OneNullable> &
      GreaterThanOrEqual.AssertsTemplate<Types.OneNullable> &
      LessThan.AssertsTemplate<Types.OneNullable> &
      LessThanOrEqual.AssertsTemplate<Types.OneNullable> &
      Range.AssertsTemplate<Types.OneNullable>;

    export type Array =
      Number.AssertsTemplate<Types.Array> &
      Natural.AssertsTemplate<Types.Array> &
      GreaterThan.AssertsTemplate<Types.Array> &
      GreaterThanOrEqual.AssertsTemplate<Types.Array> &
      LessThan.AssertsTemplate<Types.Array> &
      LessThanOrEqual.AssertsTemplate<Types.Array> &
      Range.AssertsTemplate<Types.Array>;

    export type ArrayNullable =
      Number.AssertsTemplate<Types.ArrayNullable> &
      Natural.AssertsTemplate<Types.ArrayNullable> &
      GreaterThan.AssertsTemplate<Types.ArrayNullable> &
      GreaterThanOrEqual.AssertsTemplate<Types.ArrayNullable> &
      LessThan.AssertsTemplate<Types.ArrayNullable> &
      LessThanOrEqual.AssertsTemplate<Types.ArrayNullable> &
      Range.AssertsTemplate<Types.ArrayNullable>;

    export type Not =
      Natural.AssertsTemplate<Types.One> &
      Range.AssertsTemplate<Types.One>;
  }


  export namespace ValueIs {

    export type One =
      Number.ValueIsTemplate<Types.One> &
      Natural.ValueIsTemplate<Types.One> &
      GreaterThan.ValueIsTemplate<Types.One> &
      GreaterThanOrEqual.ValueIsTemplate<Types.One> &
      LessThan.ValueIsTemplate<Types.One> &
      LessThanOrEqual.ValueIsTemplate<Types.One> &
      Range.ValueIsTemplate<Types.One>;

    export type OneNullable =
      Number.ValueIsTemplate<Types.OneNullable> &
      Natural.ValueIsTemplate<Types.OneNullable> &
      GreaterThan.ValueIsTemplate<Types.OneNullable> &
      GreaterThanOrEqual.ValueIsTemplate<Types.OneNullable> &
      LessThan.ValueIsTemplate<Types.OneNullable> &
      LessThanOrEqual.ValueIsTemplate<Types.OneNullable> &
      Range.ValueIsTemplate<Types.OneNullable>;

    export type Array =
      Number.ValueIsTemplate<Types.Array> &
      Natural.ValueIsTemplate<Types.Array> &
      GreaterThan.ValueIsTemplate<Types.Array> &
      GreaterThanOrEqual.ValueIsTemplate<Types.Array> &
      LessThan.ValueIsTemplate<Types.Array> &
      LessThanOrEqual.ValueIsTemplate<Types.Array> &
      Range.ValueIsTemplate<Types.Array>;

    export type ArrayNullable =
      Number.ValueIsTemplate<Types.ArrayNullable> &
      Natural.ValueIsTemplate<Types.ArrayNullable> &
      GreaterThan.ValueIsTemplate<Types.ArrayNullable> &
      GreaterThanOrEqual.ValueIsTemplate<Types.ArrayNullable> &
      LessThan.ValueIsTemplate<Types.ArrayNullable> &
      LessThanOrEqual.ValueIsTemplate<Types.ArrayNullable> &
      Range.ValueIsTemplate<Types.ArrayNullable>;

    export type Not =
      Natural.ValueIsTemplate<Types.One> &
      Range.ValueIsTemplate<Types.One>;
  }
}

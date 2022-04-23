namespace Types {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export type Default = any[];
  export type Nullable = Default | null;

  export type Not = void;
}


namespace Array {

  export type AssertsTemplate<R> = {
    array(value: unknown, message?: string): asserts value is R;
  }

  export type ValueIsTemplate<R> = {
    array(value: unknown): value is R;
  }
}


namespace ArrayLength {

  export type AssertsTemplate<R> = {
    arrayLength(value: unknown, expectedLength: number, message?: string): asserts value is R;
  }

  export type ValueIsTemplate<R> = {
    arrayLength(value: unknown, expectedLength: number): value is R;
  }
}


namespace ArrayMinLength {

  export type AssertsTemplate<R> = {
    arrayMinLength(value: unknown, limit: number, message?: string): asserts value is R;
  }

  export type ValueIsTemplate<R> = {
    arrayMinLength(value: unknown, limit: number): value is R;
  }
}


namespace ArrayMaxLength {

  export type AssertsTemplate<R> = {
    arrayMaxLength(value: unknown, limit: number, message?: string): asserts value is R;
  }

  export type ValueIsTemplate<R> = {
    arrayMaxLength(value: unknown, limit: number): value is R;
  }
}


namespace ArrayLengthBetween {

  export type AssertsTemplate<R> = {
    arrayLengthBetween(value: unknown, min: number, max: number, message?: string): asserts value is R;
  }

  export type ValueIsTemplate<R> = {
    arrayLengthBetween(value: unknown, min: number, max: number): value is R;
  }
}



export namespace ArrayFunctions {

  export namespace Asserts {

    export type Default =
      Array.AssertsTemplate<Types.Default> &
      ArrayLength.AssertsTemplate<Types.Default> &
      ArrayMinLength.AssertsTemplate<Types.Default> &
      ArrayMaxLength.AssertsTemplate<Types.Default> &
      ArrayLengthBetween.AssertsTemplate<Types.Default>;

    export type Nullable =
      Array.AssertsTemplate<Types.Nullable> &
      ArrayLength.AssertsTemplate<Types.Nullable> &
      ArrayMinLength.AssertsTemplate<Types.Nullable> &
      ArrayMaxLength.AssertsTemplate<Types.Nullable> &
      ArrayLengthBetween.AssertsTemplate<Types.Nullable>;
  }


  export namespace ValueIs {

    export type Default =
      Array.ValueIsTemplate<Types.Default> &
      ArrayLength.ValueIsTemplate<Types.Default> &
      ArrayMinLength.ValueIsTemplate<Types.Default> &
      ArrayMaxLength.ValueIsTemplate<Types.Default> &
      ArrayLengthBetween.ValueIsTemplate<Types.Default>;

    export type Nullable =
      Array.ValueIsTemplate<Types.Nullable> &
      ArrayLength.ValueIsTemplate<Types.Nullable> &
      ArrayMinLength.ValueIsTemplate<Types.Nullable> &
      ArrayMaxLength.ValueIsTemplate<Types.Nullable> &
      ArrayLengthBetween.ValueIsTemplate<Types.Nullable>;
  }
}

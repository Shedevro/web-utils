namespace Types {
  export type Default = any[];
  export type Nullable = Default | null;

  export type Not = void;
}


namespace Array {

  export type AssertsTemplate<R> = {
    array(array, message?: string): asserts array is R;
  }

  export type ValueIsTemplate<R> = {
    array(array): array is R;
  }
}


namespace OneOf {

  export namespace Asserts {

    export type Default = {
      oneOf<T extends (string | number)>(value, values: T[], message?: string): asserts value is T;
    }

    export type Nullable = {
      oneOf<T extends (string | number)>(value, values: T[], message?: string): asserts value is T | null;
    }

    export type Not = {
      oneOf<T extends (string | number)>(value, values: T[], message?: string): void;
    }
  }


  export namespace ValueIs {

    export type Default = {
      oneOf<T extends (string | number)>(value, values: T[]): value is T;
    }

    export type Nullable = {
      oneOf<T extends (string | number)>(value, values: T[]): value is T | null;
    }

    export type Not = {
      oneOf<T extends (string | number)>(value, values: T[]): value is boolean;
    }
  }
}


namespace ArrayLength {

  export type AssertsTemplate<R> = {
    arrayLength(array, number: number, message?: string): asserts array is R;
  }

  export type ValueIsTemplate<R> = {
    arrayLength(array, number: number): array is R;
  }
}


namespace ArrayMinLength {

  export type AssertsTemplate<R> = {
    arrayMinLength(array, limit: number, message?: string): asserts array is R;
  }

  export type ValueIsTemplate<R> = {
    arrayMinLength(array, limit: number): array is R;
  }
}


namespace ArrayMaxLength {

  export type AssertsTemplate<R> = {
    arrayMaxLength(array, limit: number, message?: string): asserts array is R;
  }

  export type ValueIsTemplate<R> = {
    arrayMaxLength(array, limit: number): array is R;
  }
}


namespace ArrayLengthBetween {

  export type AssertsTemplate<R> = {
    arrayLengthBetween(array, min: number, max: number, message?: string): asserts array is R;
  }

  export type ValueIsTemplate<R> = {
    arrayLengthBetween(array, min: number, max: number): array is R;
  }
}



export namespace ArrayFunctions {

  export namespace Asserts {

    export type Default =
      Array.AssertsTemplate<Types.Default> &
      OneOf.Asserts.Default &
      ArrayLength.AssertsTemplate<Types.Default> &
      ArrayMinLength.AssertsTemplate<Types.Default> &
      ArrayMaxLength.AssertsTemplate<Types.Default> &
      ArrayLengthBetween.AssertsTemplate<Types.Default>;

    export type Nullable =
      Array.AssertsTemplate<Types.Nullable> &
      OneOf.Asserts.Nullable &
      ArrayLength.AssertsTemplate<Types.Nullable> &
      ArrayMinLength.AssertsTemplate<Types.Nullable> &
      ArrayMaxLength.AssertsTemplate<Types.Nullable> &
      ArrayLengthBetween.AssertsTemplate<Types.Nullable>;

    export type Not =
      OneOf.Asserts.Not;
  }


  export namespace ValueIs {

    export type Default =
      Array.ValueIsTemplate<Types.Default> &
      OneOf.ValueIs.Default &
      ArrayLength.ValueIsTemplate<Types.Default> &
      ArrayMinLength.ValueIsTemplate<Types.Default> &
      ArrayMaxLength.ValueIsTemplate<Types.Default> &
      ArrayLengthBetween.ValueIsTemplate<Types.Default>;

    export type Nullable =
      Array.ValueIsTemplate<Types.Nullable> &
      OneOf.ValueIs.Nullable &
      ArrayLength.ValueIsTemplate<Types.Nullable> &
      ArrayMinLength.ValueIsTemplate<Types.Nullable> &
      ArrayMaxLength.ValueIsTemplate<Types.Nullable> &
      ArrayLengthBetween.ValueIsTemplate<Types.Nullable>;

    export type Not =
      OneOf.ValueIs.Not;
  }
}

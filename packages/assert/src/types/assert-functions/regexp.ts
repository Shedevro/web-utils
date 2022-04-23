namespace Match {

  export namespace Asserts {

    export type One = {
      match(value: unknown, regExp: RegExp, message?: string): asserts value is string;
    }

    export type OneNullable = {
      match(value: unknown, regExp: RegExp, message?: string): asserts value is string | null;
    }

    export type Array = {
      match(value: unknown, regExp: RegExp, message?: string): asserts value is string[];
    }

    export type ArrayNullable = {
      match(value: unknown, regExp: RegExp, message?: string): asserts value is string[] | null;
    }

    export type Not = {
      match(value: unknown, regExp: RegExp, message?: string): void;
    }
  }


  export namespace ValueIs {

    export type One = {
      match(value: unknown, regExp: RegExp): value is string;
    }

    export type OneNullable = {
      match(value: unknown, regExp: RegExp): value is string | null;
    }

    export type Array = {
      match(value: unknown, regExp: RegExp): value is string[];
    }

    export type ArrayNullable = {
      match(value: unknown, regExp: RegExp): value is string[] | null;
    }

    export type Not = {
      match(value: unknown, regExp: RegExp): boolean;
    }
  }
}



export namespace RegExpFunctions {

  export namespace Asserts {

    export type One =
      Match.Asserts.One;

    export type OneNullable =
      Match.Asserts.OneNullable;

    export type Array =
      Match.Asserts.Array;

    export type ArrayNullable =
      Match.Asserts.ArrayNullable;

    export type Not =
      Match.Asserts.Not;
  }


  export namespace ValueIs {

    export type One =
      Match.ValueIs.One;

    export type OneNullable =
      Match.ValueIs.OneNullable;

    export type Array =
      Match.ValueIs.Array;

    export type ArrayNullable =
      Match.ValueIs.ArrayNullable;

    export type Not =
      Match.ValueIs.Not;
  }
}

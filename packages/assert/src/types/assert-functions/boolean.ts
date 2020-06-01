export type Boolean = {
  boolean(value, customMessage?: string): asserts value is boolean;
}

export type True = {
  true(value, customMessage?: string): asserts value is true;
}

export type False = {
  false(value, customMessage?: string): asserts value is false;
}


export type BooleanFunctions =
  Boolean &
  True &
  False;

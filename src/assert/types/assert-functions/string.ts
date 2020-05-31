export type String = {
  string(value, customMessage?: string): asserts value is string;
}

export type EmptyString = {
  emptyString(value, customMessage?: string): asserts value is string;
}

export type Contains = {
  contains(value, subString: string, customMessage?: string): asserts value is string;
}

export type StartsWith = {
  startsWith(value, prefix: string, customMessage?: string): asserts value is string;
}

export type EndsWith = {
  endsWith(value, suffix: string, customMessage?: string): asserts value is string;
}


export type StringFunctions =
  String &
  EmptyString &
  Contains &
  StartsWith &
  EndsWith;

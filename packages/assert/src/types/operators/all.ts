import type {StringFunctions} from '../assert-functions/string';
import type {NumberFunctions} from '../assert-functions/number';
import type {BooleanFunctions} from '../assert-functions/boolean';
import type {ObjectFunctions} from '../assert-functions/object';
import type {FunctionFunctions} from '../assert-functions/function';
import type {ArrayFunctions} from '../assert-functions/array';
import type {InstanceFunctions} from '../assert-functions/instance';
import type {RegExpFunctions} from '../assert-functions/regexp';
import type {OtherFunctions} from '../assert-functions/other';



type AssertsArray =
  StringFunctions.Asserts.Array &
  NumberFunctions.Asserts.Array &
  BooleanFunctions.Asserts.Array &
  ObjectFunctions.Asserts.Array &
  FunctionFunctions.Asserts.Array &
  ArrayFunctions.Asserts.Default &
  InstanceFunctions.Asserts.Array &
  RegExpFunctions.Asserts.Array &
  OtherFunctions.Asserts.Array;

type AssertsArrayNullable =
  StringFunctions.Asserts.ArrayNullable &
  NumberFunctions.Asserts.ArrayNullable &
  BooleanFunctions.Asserts.ArrayNullable &
  ArrayFunctions.Asserts.Nullable &
  FunctionFunctions.Asserts.ArrayNullable &
  ObjectFunctions.Asserts.ArrayNullable &
  InstanceFunctions.Asserts.ArrayNullable &
  RegExpFunctions.Asserts.ArrayNullable &
  OtherFunctions.Asserts.ArrayNullable;


export type AllOperatorAsserts = { all: AssertsArray };
export type AllOperatorAssertsNullable = { all: AssertsArrayNullable };



type ValueIsArray =
  StringFunctions.ValueIs.Array &
  NumberFunctions.ValueIs.Array &
  BooleanFunctions.ValueIs.Array &
  ObjectFunctions.ValueIs.Array &
  FunctionFunctions.ValueIs.Array &
  ArrayFunctions.ValueIs.Default &
  InstanceFunctions.ValueIs.Array &
  RegExpFunctions.ValueIs.Array &
  OtherFunctions.ValueIs.Array;

type ValueIsArrayNullable =
  StringFunctions.ValueIs.ArrayNullable &
  NumberFunctions.ValueIs.ArrayNullable &
  BooleanFunctions.ValueIs.ArrayNullable &
  ObjectFunctions.ValueIs.ArrayNullable &
  FunctionFunctions.ValueIs.ArrayNullable &
  ArrayFunctions.ValueIs.Nullable &
  InstanceFunctions.ValueIs.ArrayNullable &
  RegExpFunctions.ValueIs.ArrayNullable &
  OtherFunctions.ValueIs.ArrayNullable;


export type AllOperatorValueIs = { all: ValueIsArray };
export type AllOperatorValueIsNullable = { all: ValueIsArrayNullable };

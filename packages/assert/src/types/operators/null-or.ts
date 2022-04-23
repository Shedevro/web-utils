import type {StringFunctions} from '../assert-functions/string';
import type {NumberFunctions} from '../assert-functions/number';
import type {BooleanFunctions} from '../assert-functions/boolean';
import type {ObjectFunctions} from '../assert-functions/object';
import type {FunctionFunctions} from '../assert-functions/function';
import type {ArrayFunctions} from '../assert-functions/array';
import type {InstanceFunctions} from '../assert-functions/instance';
import type {RegExpFunctions} from '../assert-functions/regexp';
import type {OtherFunctions} from '../assert-functions/other';

import type {AllOperatorAssertsNullable, AllOperatorValueIsNullable} from './all';
import type {NotOperatorAsserts, NotOperatorValueIs} from './not';


type AssertsFunctions =
  AllOperatorAssertsNullable &
  NotOperatorAsserts &

  StringFunctions.Asserts.OneNullable &
  NumberFunctions.Asserts.OneNullable &
  BooleanFunctions.Asserts.OneNullable &
  ObjectFunctions.Asserts.OneNullable &
  FunctionFunctions.Asserts.OneNullable &
  ArrayFunctions.Asserts.Nullable &
  InstanceFunctions.Asserts.OneNullable &
  RegExpFunctions.Asserts.OneNullable &
  OtherFunctions.Asserts.OneNullable;

export type NullOrOperatorAsserts = { nullOr: AssertsFunctions };



type ValueIsFunctions =
  AllOperatorValueIsNullable &
  NotOperatorValueIs &

  StringFunctions.ValueIs.OneNullable &
  NumberFunctions.ValueIs.OneNullable &
  BooleanFunctions.ValueIs.OneNullable &
  ObjectFunctions.ValueIs.OneNullable &
  FunctionFunctions.ValueIs.OneNullable &
  ArrayFunctions.ValueIs.Nullable &
  InstanceFunctions.ValueIs.OneNullable &
  RegExpFunctions.ValueIs.OneNullable &
  OtherFunctions.ValueIs.OneNullable;

export type NullOrOperatorValueIs = { nullOr: ValueIsFunctions };

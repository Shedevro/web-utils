import {StringFunctions} from '../assert-functions/string';
import {NumberFunctions} from '../assert-functions/number';
import {BooleanFunctions} from '../assert-functions/boolean';
import {ObjectFunctions} from '../assert-functions/object';
import {FunctionFunctions} from '../assert-functions/function';
import {ArrayFunctions} from '../assert-functions/array';
import {InstanceFunctions} from '../assert-functions/instance';
import {RegExpFunctions} from '../assert-functions/regexp';
import {OtherFunctions} from '../assert-functions/other';

import {AllOperatorAssertsNullable, AllOperatorValueIsNullable} from './all';
import {NotOperatorAsserts, NotOperatorValueIs} from './not';


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

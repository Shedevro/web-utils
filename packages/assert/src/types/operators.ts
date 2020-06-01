import * as StringFunctions from './assert-functions/string';
import * as NumberFunctions from './assert-functions/number';
import * as BooleanFunctions from './assert-functions/boolean';
import * as ArrayFunctions from './assert-functions/array';
import * as ObjectFunctions from './assert-functions/object';
import * as InstanceFunctions from './assert-functions/instance';
import * as OtherFunctions from './assert-functions/other';



type NullOrOperatorFunctions =
  NotOperator &

  StringFunctions.String &
  StringFunctions.EmptyString &
  StringFunctions.Contains &
  StringFunctions.StartsWith &
  StringFunctions.EndsWith &

  NumberFunctions.NumberFunctions &
  BooleanFunctions.BooleanFunctions &
  ObjectFunctions.ObjectFunctions &
  ArrayFunctions.ArrayFunctions &
  InstanceFunctions.InstanceFunctions &

  OtherFunctions.Equal;

type NullOrOperator = { nullOr: NullOrOperatorFunctions };



type NotOperatorFunctions =
  StringFunctions.EmptyString &
  StringFunctions.Contains &
  StringFunctions.StartsWith &
  StringFunctions.EndsWith &

  ArrayFunctions.OneOf &

  InstanceFunctions.InstanceOf &
  InstanceFunctions.InstanceOfAny &

  OtherFunctions.Defined &
  OtherFunctions.Equal;

type NotOperator = { not: NotOperatorFunctions };



export type AssertOperators =
  NullOrOperator &
  NotOperator;


export type AssertOperatorsConfig = {
  nullOr: boolean,
  not: boolean,
}

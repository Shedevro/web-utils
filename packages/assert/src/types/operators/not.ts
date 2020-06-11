import {StringFunctions} from '../assert-functions/string';
import {NumberFunctions} from '../assert-functions/number';
import {ArrayFunctions} from '../assert-functions/array';
import {InstanceFunctions} from '../assert-functions/instance';
import {RegExpFunctions} from '../assert-functions/regexp';
import {OtherFunctions} from '../assert-functions/other';



type AssertsFunctions =
  StringFunctions.Asserts.Not &
  NumberFunctions.Asserts.Not &
  ArrayFunctions.Asserts.Not &
  InstanceFunctions.Asserts.Not &
  RegExpFunctions.Asserts.Not &
  OtherFunctions.Asserts.Not;


export type NotOperatorAsserts = { not: AssertsFunctions };



type ValueIsFunctions =
  StringFunctions.ValueIs.Not &
  NumberFunctions.ValueIs.Not &
  ArrayFunctions.ValueIs.Not &
  InstanceFunctions.ValueIs.Not &
  RegExpFunctions.ValueIs.Not &
  OtherFunctions.ValueIs.Not;


export type NotOperatorValueIs = { not: ValueIsFunctions };

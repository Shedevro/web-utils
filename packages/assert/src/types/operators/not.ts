import type {StringFunctions} from '../assert-functions/string';
import type {NumberFunctions} from '../assert-functions/number';
import type {InstanceFunctions} from '../assert-functions/instance';
import type {RegExpFunctions} from '../assert-functions/regexp';
import type {OtherFunctions} from '../assert-functions/other';



type AssertsFunctions =
  StringFunctions.Asserts.Not &
  NumberFunctions.Asserts.Not &
  InstanceFunctions.Asserts.Not &
  RegExpFunctions.Asserts.Not &
  OtherFunctions.Asserts.Not;


export type NotOperatorAsserts = { not: AssertsFunctions };



type ValueIsFunctions =
  StringFunctions.ValueIs.Not &
  NumberFunctions.ValueIs.Not &
  InstanceFunctions.ValueIs.Not &
  RegExpFunctions.ValueIs.Not &
  OtherFunctions.ValueIs.Not;


export type NotOperatorValueIs = { not: ValueIsFunctions };

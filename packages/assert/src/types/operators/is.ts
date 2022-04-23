import type {StringFunctions} from '../assert-functions/string';
import type {NumberFunctions} from '../assert-functions/number';
import type {BooleanFunctions} from '../assert-functions/boolean';
import type {ObjectFunctions} from '../assert-functions/object';
import type {FunctionFunctions} from '../assert-functions/function';
import type {ArrayFunctions} from '../assert-functions/array';
import type {InstanceFunctions} from '../assert-functions/instance';
import type {RegExpFunctions} from '../assert-functions/regexp';
import type {OtherFunctions} from '../assert-functions/other';

import type {AllOperatorValueIs} from './all';
import type {NotOperatorValueIs} from './not';
import type {NullOrOperatorValueIs} from './null-or';



type Functions =
  AllOperatorValueIs &
  NullOrOperatorValueIs &
  NotOperatorValueIs &

  StringFunctions.ValueIs.One &
  NumberFunctions.ValueIs.One &
  BooleanFunctions.ValueIs.One &
  ObjectFunctions.ValueIs.One &
  FunctionFunctions.ValueIs.One &
  ArrayFunctions.ValueIs.Default &
  InstanceFunctions.ValueIs.One &
  RegExpFunctions.ValueIs.One &
  OtherFunctions.ValueIs.One;


export type IsOperator = { is: Functions };

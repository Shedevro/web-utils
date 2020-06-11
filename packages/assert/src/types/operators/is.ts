import {StringFunctions} from '../assert-functions/string';
import {NumberFunctions} from '../assert-functions/number';
import {BooleanFunctions} from '../assert-functions/boolean';
import {ObjectFunctions} from '../assert-functions/object';
import {FunctionFunctions} from '../assert-functions/function';
import {ArrayFunctions} from '../assert-functions/array';
import {InstanceFunctions} from '../assert-functions/instance';
import {RegExpFunctions} from '../assert-functions/regexp';
import {OtherFunctions} from '../assert-functions/other';

import {AllOperatorValueIs} from './all';
import {NotOperatorValueIs} from './not';
import {NullOrOperatorValueIs} from './null-or';



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

import {ArrayFunctions} from './array';
import {BooleanFunctions} from './boolean';
import {InstanceFunctions} from './instance';
import {NumberFunctions} from './number';
import {ObjectFunctions} from './object';
import {OtherFunctions} from './other';
import {StringFunctions} from './string';

export type AssertFunctions =
  ArrayFunctions &
  BooleanFunctions &
  InstanceFunctions &
  NumberFunctions &
  ObjectFunctions &
  OtherFunctions &
  StringFunctions;

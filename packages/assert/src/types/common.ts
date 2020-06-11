import {AssertOperatorsConfig} from './config';

import {AllOperatorAsserts} from './operators/all';
import {IsOperator} from './operators/is';
import {NotOperatorAsserts} from './operators/not';
import {NullOrOperatorAsserts} from './operators/null-or';

import {StringFunctions} from './assert-functions/string';
import {NumberFunctions} from './assert-functions/number';
import {BooleanFunctions} from './assert-functions/boolean';
import {ObjectFunctions} from './assert-functions/object';
import {FunctionFunctions} from './assert-functions/function';
import {ArrayFunctions} from './assert-functions/array';
import {InstanceFunctions} from './assert-functions/instance';
import {RegExpFunctions} from './assert-functions/regexp';
import {OtherFunctions} from './assert-functions/other';



export type AssertOpts = Partial<{
  operators: Partial<AssertOperatorsConfig>,
  message: string,
  customMessage: string | null,
}>


export type DefaultAssertOperators =
  AllOperatorAsserts &
  IsOperator &
  NotOperatorAsserts &
  NullOrOperatorAsserts;


type DefaultAssertFunctions =
  StringFunctions.Asserts.One &
  NumberFunctions.Asserts.One &
  BooleanFunctions.Asserts.One &
  ObjectFunctions.Asserts.One &
  FunctionFunctions.Asserts.One &
  ArrayFunctions.Asserts.Default &
  InstanceFunctions.Asserts.One &
  RegExpFunctions.Asserts.One &
  OtherFunctions.Asserts.One;


export type AssertType =
  DefaultAssertFunctions &
  DefaultAssertOperators;

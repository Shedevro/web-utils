import {ArrayFunctions} from './assert-functions/array';
import {BooleanFunctions} from './assert-functions/boolean';
import {FunctionFunctions} from './assert-functions/function';
import {InstanceFunctions} from './assert-functions/instance';
import {NumberFunctions} from './assert-functions/number';
import {ObjectFunctions} from './assert-functions/object';
import {OtherFunctions} from './assert-functions/other';
import {RegExpFunctions} from './assert-functions/regexp';

import {StringFunctions} from './assert-functions/string';
import {AllOperatorAsserts} from './operators/all';
import {IsOperator} from './operators/is';
import {NotOperatorAsserts} from './operators/not';
import {NullOrOperatorAsserts} from './operators/null-or';




export type AssertOptions = Partial<{
  operators: Partial<AssertOperatorsConfig>,
  message: string,
  customMessage: string | null,
}>

export type AssertOperatorsConfig = {
  all: boolean,
  is: boolean,
  not: boolean,
  nullOr: boolean,
};


type DefaultAssertOperators =
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

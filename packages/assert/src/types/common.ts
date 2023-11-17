import type { ArrayFunctions } from './assert-functions/array';
import type { BooleanFunctions } from './assert-functions/boolean';
import type { FunctionFunctions } from './assert-functions/function';
import type { InstanceFunctions } from './assert-functions/instance';
import type { NumberFunctions } from './assert-functions/number';
import type { ObjectFunctions } from './assert-functions/object';
import type { OtherFunctions } from './assert-functions/other';
import type { RegExpFunctions } from './assert-functions/regexp';

import type { StringFunctions } from './assert-functions/string';
import type { AllOperatorAsserts } from './operators/all';
import type { IsOperator } from './operators/is';
import type { NotOperatorAsserts } from './operators/not';
import type { NullOrOperatorAsserts } from './operators/null-or';



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

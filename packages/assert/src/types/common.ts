import type {AssertFunctions} from './assert-functions';
import type {AssertOperators, AssertOperatorsConfig} from './operators';
import type {AssertTypeChecks} from './type-checks';


export type AssertOpts = Partial<{
  operators: Partial<AssertOperatorsConfig>,
  message: string,
  customMessage: string | null,
}>


export type AssertType =
  AssertFunctions &
  AssertOperators &
  AssertTypeChecks;

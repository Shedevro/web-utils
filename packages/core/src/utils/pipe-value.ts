/**
 * A replacement for lodash.chain (in case lodash-es is used in project)
 */
export const pipeValue: PipeValueType = <TValue, TReturn>(
  value: TValue,
  ...functions: ((v: unknown) => unknown)[]
): TReturn => {
  return functions.reduce((prev: unknown, fn) => fn(prev), value) as TReturn;
};


type PipeValueType = {
  <TInput>(value: TInput): TInput;

  <TInput, V1>(
    value: TInput,
    fn1: (input: TInput) => V1,
  ): V1;

  <TInput, V1, V2>(
    value: TInput,
    fn1: (input: TInput) => V1,
    fn2: (input: V1) => V2,
  ): V2;

  <TInput, V1, V2, V3>(
    value: TInput,
    fn1: (input: TInput) => V1,
    fn2: (input: V1) => V2,
    fn3: (input: V2) => V3,
  ): V3;

  <TInput, V1, V2, V3, V4>(
    value: TInput,
    fn1: (input: TInput) => V1,
    fn2: (input: V1) => V2,
    fn3: (input: V2) => V3,
    fn4: (input: V3) => V4,
  ): V4;

  <TInput, V1, V2, V3, V4, V5>(
    value: TInput,
    fn1: (input: TInput) => V1,
    fn2: (input: V1) => V2,
    fn3: (input: V2) => V3,
    fn4: (input: V3) => V4,
    fn5: (input: V4) => V5,
  ): V5;

  <TInput, V1, V2, V3, V4, V5, V6>(
    value: TInput,
    fn1: (input: TInput) => V1,
    fn2: (input: V1) => V2,
    fn3: (input: V2) => V3,
    fn4: (input: V3) => V4,
    fn5: (input: V4) => V5,
    fn6: (input: V5) => V6,
  ): V6;

  <TInput, V1, V2, V3, V4, V5, V6, V7>(
    value: TInput,
    fn1: (input: TInput) => V1,
    fn2: (input: V1) => V2,
    fn3: (input: V2) => V3,
    fn4: (input: V3) => V4,
    fn5: (input: V4) => V5,
    fn6: (input: V5) => V6,
    fn7: (input: V6) => V7,
  ): V7;

  <TInput, V1, V2, V3, V4, V5, V6, V7, V8>(
    value: TInput,
    fn1: (input: TInput) => V1,
    fn2: (input: V1) => V2,
    fn3: (input: V2) => V3,
    fn4: (input: V3) => V4,
    fn5: (input: V4) => V5,
    fn6: (input: V5) => V6,
    fn7: (input: V6) => V7,
    fn8: (input: V7) => V8,
  ): V8;

  <TInput, V1, V2, V3, V4, V5, V6, V7, V8, V9>(
    value: TInput,
    fn1: (input: TInput) => V1,
    fn2: (input: V1) => V2,
    fn3: (input: V2) => V3,
    fn4: (input: V3) => V4,
    fn5: (input: V4) => V5,
    fn6: (input: V5) => V6,
    fn7: (input: V6) => V7,
    fn8: (input: V7) => V8,
    fn9: (input: V8) => V9,
  ): V9;

  <TInput, V1, V2, V3, V4, V5, V6, V7, V8, V9, V10>(
    value: TInput,
    fn1: (input: TInput) => V1,
    fn2: (input: V1) => V2,
    fn3: (input: V2) => V3,
    fn4: (input: V3) => V4,
    fn5: (input: V4) => V5,
    fn6: (input: V5) => V6,
    fn7: (input: V6) => V7,
    fn8: (input: V7) => V8,
    fn9: (input: V8) => V9,
    fn10: (input: V9) => V10,
  ): V10;
};

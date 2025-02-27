import { isEqual } from 'es-toolkit';
import { MonoTypeOperatorFunction } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';


/**
 * Uses es-toolkit/isEqual to distinct value
 */
export const distinctDeepEqual = <T>(): MonoTypeOperatorFunction<T> => source$ => source$.pipe(
  distinctUntilChanged((previous, current) => isEqual(previous, current)),
);

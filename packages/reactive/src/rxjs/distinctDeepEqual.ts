import { isEqual } from 'lodash-es';
import { MonoTypeOperatorFunction } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';


/**
 * Uses lodash.isEqual to distinct value
 */
export const distinctDeepEqual = <T>(): MonoTypeOperatorFunction<T> => source$ => source$.pipe(
  distinctUntilChanged((previous, current) => isEqual(previous, current)),
);

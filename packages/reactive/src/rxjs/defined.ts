import { Assert } from '@shedevro/assert';
import { OperatorFunction } from 'rxjs';
import { filter } from 'rxjs/operators';


/**
 * Defined
 *
 * Filters an observable for defined value (not null, undefined or NaN)
 */
export const defined = <T = unknown>(): OperatorFunction<T, NonNullable<T>> => source$ => source$.pipe(
  filter((value): value is NonNullable<T> => Assert.is.defined(value)),
);

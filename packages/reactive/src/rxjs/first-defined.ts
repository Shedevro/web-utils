import { Assert } from '@shedevro/assert';
import { OperatorFunction } from 'rxjs';
import { filter, take } from 'rxjs/operators';


/**
 * First defined
 *
 * Filters an observable and returns first emitted defined value (not null, undefined or NaN)
 */
export const firstDefined = <T>(): OperatorFunction<T, NonNullable<T>> => source$ => source$.pipe(
  filter((value): value is NonNullable<T> => Assert.is.defined(value)),
  take(1),
);

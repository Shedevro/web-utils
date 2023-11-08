import type { MonoTypeOperatorFunction } from 'rxjs';
import { shareReplay } from 'rxjs/operators';


/**
 * @description
 * shareReplay with predefined configuration
 */
export const shareReplayResetRef = <T>(): MonoTypeOperatorFunction<T> => source$ => source$.pipe(
  shareReplay({ refCount: true, bufferSize: 1 }),
);

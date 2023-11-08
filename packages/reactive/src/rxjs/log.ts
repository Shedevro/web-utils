import { MonoTypeOperatorFunction } from 'rxjs';
import { tap } from 'rxjs/operators';


/**
 * Log value in console
 *
 * @param tag - tag for log record
 * @param config
 * @param config.view - view type of data
 */
export const log = <T>(
  tag = 'Untagged',
  config?: { view?: 'table' },
): MonoTypeOperatorFunction<T> => source$ => source$.pipe(
  tap(value => {

    const logMessage = `%c Log %c[${tag}]`;

    if (config?.view === 'table') {
      console.log.apply(this, [logMessage, ...getStyleArguments]);
      console.table(value);
    } else {
      console.log.apply(this, [`${logMessage}\n`, ...getStyleArguments, value]);
    }
  }),
);


const getStyleArguments: string[] = (() => {
  const backgroundProperty = 'background: #303030';

  return [
    backgroundProperty,
    `${backgroundProperty}; color: #EEFF00; font-weight: bold`,
  ];
})();

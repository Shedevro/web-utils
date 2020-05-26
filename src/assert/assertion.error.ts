import {AssertionError} from 'assert';

export class WebUtilsAssertionError extends AssertionError {

  customMessageApplied: boolean;


  constructor(options?: {
    message?: string;
    actual?: any;
    expected?: any;
    operator?: string;
    stackStartFn?: Function,
    customMessageApplied?: boolean,
  }) {
    super(options);
    this.customMessageApplied = options?.customMessageApplied ?? false;
  }
}

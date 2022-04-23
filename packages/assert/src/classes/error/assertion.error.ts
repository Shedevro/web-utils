import {AbstractAppError} from '@shedevro/core';

export class WebUtilsAssertionError extends AbstractAppError {

  constructor(
    public override message: string,
    public customMessageApplied?: boolean,
  ) {
    super(message);
  }
}

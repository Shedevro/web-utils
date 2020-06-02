import {AbstractAppError} from '@shedevro/core';

export class WebUtilsAssertionError extends AbstractAppError {

  constructor(
    public message: string,
    public customMessageApplied?: boolean,
  ) {
    super(message);
  }
}

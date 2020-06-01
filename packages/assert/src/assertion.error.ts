import {AbstractAppError} from '@shedevro/core/src/classes/abstract-app-error';

export class WebUtilsAssertionError extends AbstractAppError {

  constructor(
    public message: string,
    public customMessageApplied?: boolean,
  ) {
    super(message);
  }
}

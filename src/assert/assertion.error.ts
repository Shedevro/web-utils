import {AbstractAppError} from '../common/classes/abstract-app-error/abstract-app-error';

export class WebUtilsAssertionError extends AbstractAppError {

  constructor(
    public message: string,
    public customMessageApplied?: boolean,
  ) {
    super(message);
  }
}

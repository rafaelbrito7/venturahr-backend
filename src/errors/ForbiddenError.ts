import { BaseError } from './BaseError';

export class ForbiddenError extends BaseError {
  message: string;

  constructor(message: string) {
    super(403, message);

    this.message = message;
  }
}

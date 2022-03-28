import { BaseError } from './BaseError';

export class BadRequest extends BaseError {
  message: string;

  constructor(message: string) {
    super(400, message);

    this.message = message;
  }
}

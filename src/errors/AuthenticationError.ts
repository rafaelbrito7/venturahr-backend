import { BaseError } from './BaseError';

export class AuthenticationError extends BaseError {
  message: string;

  constructor(message: string) {
    super(401, message);

    this.message = message;
  }
}

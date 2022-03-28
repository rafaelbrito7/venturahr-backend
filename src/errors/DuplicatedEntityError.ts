import { BaseError } from './BaseError';

export class DuplicatedEntityError extends BaseError {
  message: string;

  constructor(message: string) {
    super(409, message);

    this.message = message;
    this.name = 'DuplicatedEntityError';
  }
}

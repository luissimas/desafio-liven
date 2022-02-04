import { BaseError } from './base-error'

export class UserAlreadyExists extends BaseError {
  constructor(value: string, field: string, public readonly details?: string) {
    super(`User with ${field} "${value}" already exists.`, details)
  }
}

export class UserNotFound extends BaseError {
  constructor(public readonly details?: string) {
    super(`User not found.`, details)
  }
}

export class InvalidFieldError extends BaseError {
  constructor(value: string, field: string, public readonly details?: string) {
    super(`Value "${value}" in field "${field}" is invalid.`, details)
  }
}

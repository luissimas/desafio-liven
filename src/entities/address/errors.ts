import { IError } from '../../errors/IError'

export class InvalidFieldError extends Error implements IError {
  constructor(value: string, field: string, public readonly details?: string) {
    super(`Value "${value}" in field "${field}" is invalid.`)
    this.name = 'InvalidField'
    this.details = details
  }
}

import { IError } from '../../../errors/IError'

export class UserAlreadyExists extends Error implements IError {
  constructor(value: string, field: string, public readonly details?: string) {
    super(`User with ${field} "${value}" already exists.`)
    this.name = 'AlreadyExists'
    this.details = details
  }
}

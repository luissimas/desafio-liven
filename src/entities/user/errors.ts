import { IError } from '../../errors/IError'

export class InvalidNameError extends Error implements IError {
  constructor(name: string, public readonly details?: string) {
    super(`Name "${name}" is invalid.`)
    this.name = 'InvalidArgument'
    this.details = details
  }
}

export class InvalidEmailError extends Error implements IError {
  constructor(email: string, public readonly details?: string) {
    super(`E-mail "${email}" is invalid.`)
    this.name = 'InvalidArgument'
    this.details = details
  }
}

export class InvalidPasswordError extends Error implements IError {
  constructor(password: string, public readonly details?: string) {
    super(`Password "${password}" is invalid.`)
    this.name = 'InvalidArgument'
    this.details = details
  }
}

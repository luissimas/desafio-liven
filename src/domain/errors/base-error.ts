export abstract class BaseError extends Error {
  public readonly details?: string

  constructor(message: string, details?: string) {
    super(message)
    this.details = details
  }
}

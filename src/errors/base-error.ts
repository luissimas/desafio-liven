export abstract class BaseError extends Error {
  public readonly details?: string
  public abstract readonly status: number

  constructor(message: string, details?: string) {
    super(message)
    this.details = details
  }
}

import { Request, Response, NextFunction } from 'express'
import { BaseError } from '@errors/base-error'

export class ErrorHandler {
  public static async handle(error: BaseError, _req: Request, res: Response, _next: NextFunction): Promise<Response> {
    const { status, message, details } = error

    if (status) {
      if (message) {
        return res.status(status).json({ error: message, details: details })
      }
    }

    return res.status(500).json({ 'Internal error': error.message })
  }
}

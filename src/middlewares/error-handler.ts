import { Request, Response, NextFunction } from 'express'
import { IError } from '../errors/IError'

export class ErrorHandler {
  public static async handle(error: IError, req: Request, res: Response, next: NextFunction): Promise<Response> {
    // TODO: Deal with error status
    return res.status(500).json({ error: error.message, details: error.details })
  }
}

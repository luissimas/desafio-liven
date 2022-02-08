import { IController } from '@controllers/IController'
import { NextFunction, Request, Response } from 'express'

export function adaptRoute(controller: IController) {
  return (req: Request, res: Response, next: NextFunction) => controller.handle(req, res, next)
}

import { NextFunction, Request, Response } from 'express'
import { ListUserUseCase } from '@use-cases/user/list-user'

export class ListUserController {
  constructor(private listUserUseCase: ListUserUseCase) {}

  async handle(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    try {
      const users = await this.listUserUseCase.execute()

      return res.status(200).json(users)
    } catch (error) {
      next(error)
    }
  }
}

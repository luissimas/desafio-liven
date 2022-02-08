import { IController } from '@controllers/IController'
import { GetUserByIdUseCase } from '@use-cases/user/get-user-by-id'
import { NextFunction, Request, Response } from 'express'

export class GetUserByIdController implements IController {
  constructor(private getUserByIdUseCase: GetUserByIdUseCase) {}

  async handle(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    const { id } = req.params

    try {
      const user = await this.getUserByIdUseCase.execute({ id })

      return res.status(200).json(user)
    } catch (error) {
      next(error)
    }
  }
}

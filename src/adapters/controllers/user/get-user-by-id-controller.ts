import { GetUserByIdUseCase } from '@use-cases/user/get-user-by-id'
import { NextFunction, Request, Response } from 'express'

export class GetUserByIdController {
  constructor(private getUserByIdUseCase: GetUserByIdUseCase) {}

  async handle(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    const { id } = req.params

    try {
      const user = await this.getUserByIdUseCase.execute({ id })

      return res.status(201).json(user)
    } catch (error) {
      next(error)
    }
  }
}

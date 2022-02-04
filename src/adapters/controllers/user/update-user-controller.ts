import { UpdateUserUseCase } from '@use-cases/user/update-user'
import { NextFunction, Request, Response } from 'express'

export class UpdateUserController {
  constructor(private updateUserUseCase: UpdateUserUseCase) {}

  async handle(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    const { id } = req.params
    const { name, email, password } = req.body

    try {
      await this.updateUserUseCase.execute({ id, name, email, password })

      return res.status(204).send()
    } catch (error) {
      next(error)
    }
  }
}

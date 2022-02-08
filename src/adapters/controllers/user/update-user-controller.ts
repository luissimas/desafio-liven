import { IController } from '@controllers/IController'
import { UpdateUserUseCase } from '@use-cases/user/update-user'
import { filter } from '@utils/object'
import { NextFunction, Request, Response } from 'express'

export class UpdateUserController implements IController {
  constructor(private updateUserUseCase: UpdateUserUseCase) {}

  async handle(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    const { id } = req.params
    const { name, age, email, password } = req.body
    const data = filter({ name, age, email, password })

    try {
      await this.updateUserUseCase.execute({ id, ...data })

      return res.status(204).send()
    } catch (error) {
      next(error)
    }
  }
}

import { DeleteUserUseCase } from '@use-cases/user/delete-user'
import { NextFunction, Request, Response } from 'express'

export class DeleteUserController {
  constructor(private deleUserUseCase: DeleteUserUseCase) {}

  async handle(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    const { id } = req.params

    try {
      await this.deleUserUseCase.execute({ id })

      return res.status(204).send()
    } catch (error) {
      next(error)
    }
  }
}

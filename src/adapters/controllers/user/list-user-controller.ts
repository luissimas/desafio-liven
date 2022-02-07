import { NextFunction, Request, Response } from 'express'
import { ListUserUseCase } from '@use-cases/user/list-user'

export class ListUserController {
  constructor(private listUserUseCase: ListUserUseCase) {}

  async handle(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    const { name, email, age } = req.query

    const filters = {
      name: name as string,
      email: email as string,
      age: age && !isNaN(+age) ? parseInt(age as string) : undefined,
    }

    try {
      const users = await this.listUserUseCase.execute(filters)

      return res.status(200).json(users)
    } catch (error) {
      next(error)
    }
  }
}

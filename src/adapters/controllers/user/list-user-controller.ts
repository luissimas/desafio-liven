import { NextFunction, Request, Response } from 'express'
import { ListUserUseCase } from '@use-cases/user/list-user'
import { IController } from '@controllers/IController'
import { filter } from '@utils/object'

export class ListUserController implements IController {
  constructor(private listUserUseCase: ListUserUseCase) {}

  async handle(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    const { name, email, age } = req.query

    const rawFilters = {
      name: name as string,
      email: email as string,
      age: age && !isNaN(+age) ? parseInt(age as string) : undefined,
    }

    // Filtering undefined fields from query strings
    const filters = filter(rawFilters)

    try {
      const users = await this.listUserUseCase.execute(filters)

      return res.status(200).json(users)
    } catch (error) {
      next(error)
    }
  }
}

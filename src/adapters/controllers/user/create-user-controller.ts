import { NextFunction, Request, Response } from 'express'
import { CreateUserUseCase } from '@use-cases/user/create-user'

export class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  async handle(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    const { name, age, email, password } = req.body

    try {
      const id = await this.createUserUseCase.execute({ name, age, email, password })

      return res.status(201).json({ id })
    } catch (error) {
      return next(error)
    }
  }
}

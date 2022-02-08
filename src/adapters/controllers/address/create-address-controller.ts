import { IController } from '@controllers/IController'
import { CreateAddressUseCase } from '@use-cases/address/create-address'
import { NextFunction, Request, Response } from 'express'

export class CreateAddressController implements IController {
  constructor(private createAddressUseCase: CreateAddressUseCase) {}

  async handle(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    const { idUser, state, country, city, zipcode, street, number } = req.body

    try {
      const id = await this.createAddressUseCase.execute({ idUser, state, country, city, zipcode, street, number })

      return res.status(201).json({ id })
    } catch (error) {
      return next(error)
    }
  }
}

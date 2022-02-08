import { NextFunction, Request, Response } from 'express'
import { UpdateAddressUseCase } from '@use-cases/address/update-address'
import { IController } from '@controllers/IController'

export class UpdateAddressController implements IController {
  constructor(private updateAddressUseCase: UpdateAddressUseCase) {}

  async handle(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    const { id } = req.params
    const { state, country, city, zipcode, street, number } = req.body

    try {
      await this.updateAddressUseCase.execute({ id, state, country, city, zipcode, street, number })

      return res.status(204).send()
    } catch (error) {
      next(error)
    }
  }
}

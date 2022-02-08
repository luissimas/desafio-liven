import { NextFunction, Request, Response } from 'express'
import { GetAddressByIdUseCase } from '@use-cases/address/get-address-by-id'
import { IController } from '@controllers/IController'

export class GetAddressByIdController implements IController {
  constructor(private getAddressByIdUseCase: GetAddressByIdUseCase) {}

  async handle(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    const { id } = req.params

    try {
      const address = await this.getAddressByIdUseCase.execute({ id })

      return res.status(200).json(address)
    } catch (error) {
      next(error)
    }
  }
}

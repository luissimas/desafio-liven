import { NextFunction, Request, Response } from 'express'
import { ListAddressUseCase } from '@use-cases/address/list-address'

export class ListAddressController {
  constructor(private listAddressUseCase: ListAddressUseCase) {}

  async handle(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    try {
      const addresses = await this.listAddressUseCase.execute()

      return res.status(200).json(addresses)
    } catch (error) {
      next(error)
    }
  }
}

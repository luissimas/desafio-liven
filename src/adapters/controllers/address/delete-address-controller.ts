import { DeleteAddressUseCase } from '@use-cases/address/delete-address'
import { NextFunction, Request, Response } from 'express'

export class DeleteAddressController {
  constructor(private deleteAddressUseCase: DeleteAddressUseCase) {}

  async handle(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    const { id } = req.params

    try {
      await this.deleteAddressUseCase.execute({ id })

      return res.status(204).send()
    } catch (error) {
      next(error)
    }
  }
}

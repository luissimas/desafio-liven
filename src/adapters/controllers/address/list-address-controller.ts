import { NextFunction, Request, Response } from 'express'
import { ListAddressUseCase } from '@use-cases/address/list-address'
import { IController } from '@controllers/IController'
import { filter } from '@utils/object'

export class ListAddressController implements IController {
  constructor(private listAddressUseCase: ListAddressUseCase) {}

  async handle(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    const { idUser, state, country, city, zipcode, street, number } = req.query

    const rawFilters = {
      idUser: idUser as string,
      state: state as string,
      country: country as string,
      city: city as string,
      zipcode: zipcode as string,
      street: street as string,
      number: number as string,
    }

    // Filtering undefined fields from query strings
    const filters = filter(rawFilters)

    try {
      const addresses = await this.listAddressUseCase.execute(filters)

      return res.status(200).json(addresses)
    } catch (error) {
      next(error)
    }
  }
}

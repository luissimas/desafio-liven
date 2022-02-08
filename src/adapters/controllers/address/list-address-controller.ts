import { NextFunction, Request, Response } from 'express'
import { ListAddressUseCase } from '@use-cases/address/list-address'

export class ListAddressController {
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

    // Filtering undefined fields from query params
    const filters = Object.fromEntries(Object.entries(rawFilters).filter(([_key, value]) => value))

    try {
      const addresses = await this.listAddressUseCase.execute(filters)

      return res.status(200).json(addresses)
    } catch (error) {
      next(error)
    }
  }
}

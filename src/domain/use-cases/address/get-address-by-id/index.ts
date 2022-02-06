import { EntityNotFound } from '@errors'
import { Address } from '@entities/address'
import { IAddressRepository } from '../ports/address-repository'
import { IGetAddressByIdDTO } from './get-address-by-id-dto'

export class GetAddressByIdUseCase {
  constructor(private addressRepository: IAddressRepository) {}

  async execute(data: IGetAddressByIdDTO): Promise<Address | never> {
    const address = await this.addressRepository.findById(data.id)

    if (!address) {
      throw new EntityNotFound('Address')
    }

    return address
  }
}

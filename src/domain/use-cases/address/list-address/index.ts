import { Address } from '@entities/address'
import { IAddressRepository } from '../ports/address-repository'
import { IListAddressDTO } from './list-address-dto'

export class ListAddressUseCase {
  constructor(private addressesRepository: IAddressRepository) {}

  async execute(filters?: IListAddressDTO): Promise<Address[]> {
    const addresses = await this.addressesRepository.findAll(filters)

    return addresses
  }
}

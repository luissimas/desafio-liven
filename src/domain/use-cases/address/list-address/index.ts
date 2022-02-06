import { Address } from '@entities/address'
import { IAddressRepository } from '../ports/address-repository'

export class ListAddressUseCase {
  constructor(private addressesRepository: IAddressRepository) {}

  async execute(): Promise<Address[]> {
    const addresses = await this.addressesRepository.findAll()

    return addresses
  }
}

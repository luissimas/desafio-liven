import { Address } from '@entities/address'
import { EntityNotFound } from '@errors'
import { IAddressRepository } from '../ports/address-repository'
import { IUpdateAddressDTO } from './update-address-dto'

export class UpdateAddressUseCase {
  constructor(private addressRepository: IAddressRepository) {}

  async execute(data: IUpdateAddressDTO): Promise<void> {
    const addressRegistered = await this.addressRepository.findById(data.id)

    if (!addressRegistered) {
      throw new EntityNotFound('Address')
    }

    const address = new Address({ ...addressRegistered, ...data }, addressRegistered.id)

    await this.addressRepository.update(address)
  }
}

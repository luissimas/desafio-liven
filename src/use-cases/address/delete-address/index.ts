import { EntityNotFound } from '@errors'
import { IAddressRepository } from '../ports/address-repository'
import { IDeleteAddressDTO } from './delete-address-dto'

export class DeleteAddressUseCase {
  constructor(private addressRepository: IAddressRepository) {}

  async execute(data: IDeleteAddressDTO): Promise<void> {
    const addressRegistered = await this.addressRepository.findById(data.id)

    if (!addressRegistered) {
      throw new EntityNotFound('Address')
    }

    await this.addressRepository.delete(addressRegistered)
  }
}

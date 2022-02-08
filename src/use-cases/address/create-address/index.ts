import { Address } from '@entities/address'
import { EntityNotFound } from '@errors'
import { IUserRepository } from '@use-cases/user/ports/user-repository'
import { IAddressRepository } from '../ports/address-repository'
import { ICreateAddressDTO } from './create-address-dto'

export class CreateAddressUseCase {
  constructor(private addressRepository: IAddressRepository, private userRepository: IUserRepository) {}

  async execute(data: ICreateAddressDTO): Promise<string | never> {
    const address = new Address(data)

    // Checking if user exists
    const user = await this.userRepository.findById(data.idUser)

    if (!user) {
      throw new EntityNotFound('User')
    }

    await this.addressRepository.save(address)

    return address.id
  }
}

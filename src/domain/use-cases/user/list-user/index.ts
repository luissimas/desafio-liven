import { IAddressRepository } from '@use-cases/address/ports/address-repository'
import { IUserRepository } from '@use-cases/user/ports/user-repository'
import { IListUserDTO } from './list-user-dto'

export class ListUserUseCase {
  constructor(private userRepository: IUserRepository, private addressesRepository: IAddressRepository) {}

  async execute(): Promise<IListUserDTO[]> {
    const users = await this.userRepository.findAll()
    const addresses = await this.addressesRepository.findAll()

    return users.map(user => ({
      ...user,
      addresses: addresses.filter(address => address.idUser === user.id),
    }))
  }
}

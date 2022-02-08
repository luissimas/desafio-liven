import { IUserRepository } from '@use-cases/user/ports/user-repository'
import { User } from '@entities/user'
import { IUserData } from '@entities/user/user-data'
import { MemoryAddressRepository } from '../address/memory-address-repository'

export class MemoryUserRepository implements IUserRepository {
  static users: Array<User> = []

  async save(user: User): Promise<void> {
    MemoryUserRepository.users.push(user)
  }

  async findAll(): Promise<IUserData[]> {
    const users = MemoryUserRepository.users
    const addresses = MemoryAddressRepository.addresses

    return users.map(user => ({ ...user, addresses: addresses.filter(({ idUser }) => idUser === user.id) }))
  }

  async findById(id: string): Promise<IUserData | undefined> {
    const user = MemoryUserRepository.users.find(user => user.id === id)

    if (user) {
      const addresses = MemoryAddressRepository.addresses.filter(({ idUser }) => idUser === user.id)

      return { ...user, addresses }
    }

    return user
  }

  async findByEmail(email: string): Promise<IUserData | undefined> {
    const user = MemoryUserRepository.users.find(user => user.email === email)

    if (user) {
      const addresses = MemoryAddressRepository.addresses.filter(({ idUser }) => idUser === user.id)

      return { ...user, addresses }
    }

    return user
  }

  async update(user: User): Promise<void> {
    const id = user.id
    const index = MemoryUserRepository.users.findIndex(user => user.id === id)

    MemoryUserRepository.users[index] = user
  }

  async delete(user: User): Promise<void> {
    const id = user.id
    const index = MemoryUserRepository.users.findIndex(user => user.id === id)

    MemoryUserRepository.users.splice(index, 1)
  }
}

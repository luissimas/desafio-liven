import { IUserRepository } from '../../../adapters/repositories/user/IUserRepository'
import { User } from '../../../entities/user'

export class MemoryUserRepository implements IUserRepository {
  static users: Array<User> = []

  async save(user: User): Promise<void> {
    MemoryUserRepository.users.push(user)
  }

  async list(): Promise<User[]> {
    return MemoryUserRepository.users
  }

  async findById(id: string): Promise<User | undefined> {
    const user = MemoryUserRepository.users.find(user => user.id === id)

    return user
  }

  async findByEmail(email: string): Promise<User | undefined> {
    const user = MemoryUserRepository.users.find(user => user.email === email)

    return user
  }

  async update(user: User): Promise<void> {
    const id = user.id
    const index = MemoryUserRepository.users.findIndex(user => user.id === id)

    MemoryUserRepository.users.splice(index, 1)
    MemoryUserRepository.users.push(user)
  }

  async delete(id: string): Promise<void> {
    const index = MemoryUserRepository.users.findIndex(user => user.id === id)

    MemoryUserRepository.users.splice(index, 1)
  }
}
import { User } from '@entities/user'
import { IUserRepository } from '@use-cases/user/ports/user-repository'

export class ListUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(): Promise<User[]> {
    const users = await this.userRepository.findAll()

    return users
  }
}

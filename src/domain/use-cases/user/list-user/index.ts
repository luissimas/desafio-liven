import { IUserData } from '@entities/user/user-data'
import { IUserRepository } from '@use-cases/user/ports/user-repository'
import { IListUserDTO } from './list-user-dto'

export class ListUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(filters?: IListUserDTO): Promise<IUserData[]> {
    const users = await this.userRepository.findAll(filters)

    return users
  }
}

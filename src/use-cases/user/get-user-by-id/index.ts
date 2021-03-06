import { IUserData } from '@entities/user/user-data'
import { EntityNotFound } from '@errors'
import { IUserRepository } from '@use-cases/user/ports/user-repository'
import { IGetUserByIdDTO } from './get-user-by-id-dto'

export class GetUserByIdUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(data: IGetUserByIdDTO): Promise<IUserData | never> {
    const user = await this.userRepository.findById(data.id)

    if (!user) {
      throw new EntityNotFound('User')
    }

    return user
  }
}

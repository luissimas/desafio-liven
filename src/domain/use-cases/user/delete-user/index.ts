import { UserNotFound } from '@errors'
import { IUserRepository } from '@use-cases/user/ports/user-repository'
import { IDeleteUserDTO } from './delete-user-dto'

export class DeleteUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(data: IDeleteUserDTO): Promise<void> {
    const userRegistered = await this.userRepository.findById(data.id)

    if (!userRegistered) {
      throw new UserNotFound()
    }

    await this.userRepository.delete(userRegistered)
  }
}

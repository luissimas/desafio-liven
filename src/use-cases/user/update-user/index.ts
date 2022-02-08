import { User } from '@entities/user'
import { UserAlreadyExists, EntityNotFound } from '@errors'
import { IUserRepository } from '@use-cases/user/ports/user-repository'
import { IUpdateUserDTO } from './update-user-dto'
import { hash } from 'bcrypt'

export class UpdateUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(data: IUpdateUserDTO): Promise<void> {
    const userRegistered = await this.userRepository.findById(data.id)

    if (!userRegistered) {
      throw new EntityNotFound('User')
    }

    if (data.email) {
      const userAlreadyExists = await this.userRepository.findByEmail(data.email)

      if (userAlreadyExists && userAlreadyExists.id !== data.id) {
        throw new UserAlreadyExists(data.email, 'email')
      }
    }

    if (data.password) {
      User.validatePassword(data.password)
    }

    // Hashing new password
    const password = data.password ? await hash(data.password, 12) : userRegistered.password

    const user = new User({ ...userRegistered, ...data, password }, userRegistered.id)

    await this.userRepository.update(user)
  }
}

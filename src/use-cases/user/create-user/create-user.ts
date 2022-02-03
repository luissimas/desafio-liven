import { IUserRepository } from '../../../adapters/repositories/user/IUserRepository'
import { User } from '../../../entities/user'
import { ICreateUserDTO } from './create-user-dto'
import { UserAlreadyExists } from './errors'
import { hash } from 'bcrypt'

export class CreateUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(data: ICreateUserDTO): Promise<string> {
    const userAlreadyExists = await this.userRepository.findByEmail(data.email)

    if (userAlreadyExists) {
      throw new UserAlreadyExists(data.email, 'email')
    }

    // Validating and hashing password
    User.validatePassword(data.password)
    const hashPassword = await hash(data.password, 12)

    const user = new User({ ...data, password: hashPassword })
    await this.userRepository.save(user)

    return user.id
  }
}

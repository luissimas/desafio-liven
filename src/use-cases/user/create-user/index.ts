import { IUserRepository } from '@use-cases/user/ports/user-repository'
import { IEmailService } from '../ports/email-service'
import { User } from '@entities/user'
import { ICreateUserDTO } from './create-user-dto'
import { UserAlreadyExists } from '@errors'
import { hash } from 'bcrypt'

export class CreateUserUseCase {
  constructor(private userRepository: IUserRepository, private emailService: IEmailService) {}

  async execute(data: ICreateUserDTO): Promise<string | never> {
    const userAlreadyExists = await this.userRepository.findByEmail(data.email)

    if (userAlreadyExists) {
      throw new UserAlreadyExists(data.email, 'email')
    }

    // Validating and hashing password
    User.validatePassword(data.password)
    const hashPassword = await hash(data.password, 12)

    const user = new User({ ...data, password: hashPassword })
    await this.userRepository.save(user)

    await this.emailService.send({
      to: {
        name: user.name,
        email: user.email,
      },
      from: {
        name: 'Treinamento Liven',
        email: 'treinamento-liven@liven.com',
      },
      subject: 'Bem-vindo!',
      body: `
      <p>Olá <b>${data.name}!</b>
      <p>Você já pode cadastrar e visualizar seus endereços na plataforma!</p>
      `,
    })

    return user.id
  }
}

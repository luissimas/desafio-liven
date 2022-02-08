import { CreateUserController } from '@controllers/user/create-user-controller'
import { NodemailerEmailService } from '@infrastructure/email/nodemailer-email-service'
import { ObjectionUserRepository } from '@infrastructure/repositories/user/objection-user-repository'
import { CreateUserUseCase } from '@use-cases/user/create-user'

export function makeCreateUserController() {
  const objectionUserRepository = new ObjectionUserRepository()
  const nodemailerEmailService = new NodemailerEmailService()

  const createUserUseCase = new CreateUserUseCase(objectionUserRepository, nodemailerEmailService)

  const createUserController = new CreateUserController(createUserUseCase)

  return createUserController
}

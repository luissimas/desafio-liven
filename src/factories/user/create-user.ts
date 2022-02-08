import { CreateUserController } from '@controllers/user/create-user-controller'
import { ObjectionUserRepository } from '@infrastructure/repositories/user/objection-user-repository'
import { CreateUserUseCase } from '@use-cases/user/create-user'

export function makeCreateUserController() {
  const objectionUserRepository = new ObjectionUserRepository()
  const createUserUseCase = new CreateUserUseCase(objectionUserRepository)

  const createUserController = new CreateUserController(createUserUseCase)

  return createUserController
}

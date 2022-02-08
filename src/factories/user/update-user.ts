import { UpdateUserController } from '@controllers/user/update-user-controller'
import { ObjectionUserRepository } from '@infrastructure/repositories/user/objection-user-repository'
import { UpdateUserUseCase } from '@use-cases/user/update-user'

export function makeUpdateUserController() {
  const objectionUserRepository = new ObjectionUserRepository()
  const updateUserUseCase = new UpdateUserUseCase(objectionUserRepository)

  const updateUserController = new UpdateUserController(updateUserUseCase)

  return updateUserController
}

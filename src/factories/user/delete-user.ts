import { DeleteUserController } from '@controllers/user/delete-user-controller'
import { ObjectionUserRepository } from '@infrastructure/repositories/user/objection-user-repository'
import { DeleteUserUseCase } from '@use-cases/user/delete-user'

export function makeDeleteUserController() {
  const objectionUserRepository = new ObjectionUserRepository()
  const deleteUserUseCase = new DeleteUserUseCase(objectionUserRepository)

  const deleteUserController = new DeleteUserController(deleteUserUseCase)

  return deleteUserController
}

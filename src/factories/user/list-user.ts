import { ListUserController } from '@controllers/user/list-user-controller'
import { ObjectionUserRepository } from '@infrastructure/repositories/user/objection-user-repository'
import { ListUserUseCase } from '@use-cases/user/list-user'

export function makeListUserController() {
  const objectionUserRepository = new ObjectionUserRepository()

  const listUserUseCase = new ListUserUseCase(objectionUserRepository)

  const listUserController = new ListUserController(listUserUseCase)

  return listUserController
}

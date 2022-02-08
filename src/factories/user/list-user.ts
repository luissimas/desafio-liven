import { ListUserController } from '@controllers/user/list-user-controller'
import { ObjectionAddressRepository } from '@infrastructure/repositories/address/objection-address-repository'
import { ObjectionUserRepository } from '@infrastructure/repositories/user/objection-user-repository'
import { ListUserUseCase } from '@use-cases/user/list-user'

export function makeListUserController() {
  const objectionUserRepository = new ObjectionUserRepository()
  const objectionAddressRepository = new ObjectionAddressRepository()

  const listUserUseCase = new ListUserUseCase(objectionUserRepository, objectionAddressRepository)

  const listUserController = new ListUserController(listUserUseCase)

  return listUserController
}

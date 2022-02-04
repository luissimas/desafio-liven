import { ListUserController } from '@controllers/user/list-user-controller'
import { MemoryAddressRepository } from '@infrastructure/repositories/address/memory-address-repository'
import { MemoryUserRepository } from '@infrastructure/repositories/user/memory-user-repository'
import { ListUserUseCase } from '@use-cases/user/list-user'

export function makeListUserController() {
  const memoryUserRepository = new MemoryUserRepository()
  const memoryAddressRepository = new MemoryAddressRepository()

  const listUserUseCase = new ListUserUseCase(memoryUserRepository, memoryAddressRepository)

  const listUserController = new ListUserController(listUserUseCase)

  return listUserController
}

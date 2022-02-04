import { ListUserController } from '@controllers/user/list-user-controller'
import { MemoryUserRepository } from '@infrastructure/repositories/user/memory-user-repository'
import { ListUserUseCase } from '@use-cases/user/list-user'

export function makeListUserController() {
  const memoryUserRepository = new MemoryUserRepository()
  const listUserUseCase = new ListUserUseCase(memoryUserRepository)

  const listUserController = new ListUserController(listUserUseCase)

  return listUserController
}

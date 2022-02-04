import { UpdateUserController } from '@controllers/user/update-user-controller'
import { MemoryUserRepository } from '@infrastructure/repositories/user/memory-user-repository'
import { UpdateUserUseCase } from '@use-cases/user/update-user'

export function makeUpdateUserController() {
  const memoryUserRepository = new MemoryUserRepository()
  const updateUserUseCase = new UpdateUserUseCase(memoryUserRepository)

  const updateUserController = new UpdateUserController(updateUserUseCase)

  return updateUserController
}

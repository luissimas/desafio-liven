import { DeleteUserController } from '@controllers/user/delete-user-controller'
import { MemoryUserRepository } from '@infrastructure/repositories/user/memory-user-repository'
import { DeleteUserUseCase } from '@use-cases/user/delete-user'

export function makeDeleteUserController() {
  const memoryUserRepository = new MemoryUserRepository()
  const deleteUserUseCase = new DeleteUserUseCase(memoryUserRepository)

  const deleteUserController = new DeleteUserController(deleteUserUseCase)

  return deleteUserController
}

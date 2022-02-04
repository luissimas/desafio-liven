import { GetUserByIdController } from '@controllers/user/get-user-by-id-controller'
import { MemoryUserRepository } from '@infrastructure/repositories/user/memory-user-repository'
import { GetUserByIdUseCase } from '@use-cases/user/get-user-by-id'

export function makeGetUserByIdController() {
  const memoryUserRepository = new MemoryUserRepository()
  const getUserByIdUseCase = new GetUserByIdUseCase(memoryUserRepository)

  const getUserByIdController = new GetUserByIdController(getUserByIdUseCase)

  return getUserByIdController
}

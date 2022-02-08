import { GetUserByIdController } from '@controllers/user/get-user-by-id-controller'
import { ObjectionUserRepository } from '@infrastructure/repositories/user/objection-user-repository'
import { GetUserByIdUseCase } from '@use-cases/user/get-user-by-id'

export function makeGetUserByIdController() {
  const objectionUserRepository = new ObjectionUserRepository()
  const getUserByIdUseCase = new GetUserByIdUseCase(objectionUserRepository)

  const getUserByIdController = new GetUserByIdController(getUserByIdUseCase)

  return getUserByIdController
}

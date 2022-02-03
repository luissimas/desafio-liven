import { CreateUserController } from '../../adapters/controllers/user/create-user-controller'
import { MemoryUserRepository } from '../../infrastructure/repositories/user/MemoryUserRepository'
import { CreateUserUseCase } from '../../use-cases/user/create-user/create-user'

const memoryUserRepository = new MemoryUserRepository()
const createUserUseCase = new CreateUserUseCase(memoryUserRepository)

const createUserController = new CreateUserController(createUserUseCase)

export { createUserController }

import { CreateAddressController } from '@controllers/address/create-address-controller'
import { MemoryAddressRepository } from '@infrastructure/repositories/address/memory-address-repository'
import { MemoryUserRepository } from '@infrastructure/repositories/user/memory-user-repository'
import { CreateAddressUseCase } from '@use-cases/address/create-address'

export function makeCreateAddressController() {
  const memoryAddressRepository = new MemoryAddressRepository()
  const memoryUserRepository = new MemoryUserRepository()
  const createAddressUseCase = new CreateAddressUseCase(memoryAddressRepository, memoryUserRepository)

  const createAddressController = new CreateAddressController(createAddressUseCase)

  return createAddressController
}

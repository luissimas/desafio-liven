import { GetAddressByIdController } from '@controllers/address/get-by-id-controller'
import { MemoryAddressRepository } from '@infrastructure/repositories/address/memory-address-repository'
import { GetAddressByIdUseCase } from '@use-cases/address/get-address-by-id'

export function makeGetAddressByIdController() {
  const memoryAddressRepository = new MemoryAddressRepository()
  const getAddressByIdUseCase = new GetAddressByIdUseCase(memoryAddressRepository)

  const getAddressByIdController = new GetAddressByIdController(getAddressByIdUseCase)

  return getAddressByIdController
}

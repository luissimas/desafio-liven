import { UpdateAddressController } from '@controllers/address/update-address-controller'
import { MemoryAddressRepository } from '@infrastructure/repositories/address/memory-address-repository'
import { UpdateAddressUseCase } from '@use-cases/address/update-address'

export function makeUpdateAddressController() {
  const memoryAddressRepository = new MemoryAddressRepository()
  const updateAddressUseCase = new UpdateAddressUseCase(memoryAddressRepository)

  const updateAddressController = new UpdateAddressController(updateAddressUseCase)

  return updateAddressController
}

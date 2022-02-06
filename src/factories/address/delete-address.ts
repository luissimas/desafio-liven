import { DeleteAddressController } from '@controllers/address/delete-address-controller'
import { MemoryAddressRepository } from '@infrastructure/repositories/address/memory-address-repository'
import { DeleteAddressUseCase } from '@use-cases/address/delete-address'

export function makeDeleteAddressController() {
  const memoryAddressRepository = new MemoryAddressRepository()
  const deleteAddressUseCase = new DeleteAddressUseCase(memoryAddressRepository)

  const deleteAddressController = new DeleteAddressController(deleteAddressUseCase)

  return deleteAddressController
}

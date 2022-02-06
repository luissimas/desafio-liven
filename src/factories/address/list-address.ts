import { ListAddressController } from '@controllers/address/list-address-controller'
import { MemoryAddressRepository } from '@infrastructure/repositories/address/memory-address-repository'
import { ListAddressUseCase } from '@use-cases/address/list-address'

export function makeListAdressController() {
  const memoryAddressRepository = new MemoryAddressRepository()
  const listAddressUseCase = new ListAddressUseCase(memoryAddressRepository)

  const listAddressController = new ListAddressController(listAddressUseCase)

  return listAddressController
}

import { ListAddressController } from '@controllers/address/list-address-controller'
import { ObjectionAddressRepository } from '@infrastructure/repositories/address/objection-address-repository'
import { ListAddressUseCase } from '@use-cases/address/list-address'

export function makeListAdressController() {
  const objectionAddressRepository = new ObjectionAddressRepository()
  const listAddressUseCase = new ListAddressUseCase(objectionAddressRepository)

  const listAddressController = new ListAddressController(listAddressUseCase)

  return listAddressController
}

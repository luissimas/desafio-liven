import { DeleteAddressController } from '@controllers/address/delete-address-controller'
import { ObjectionAddressRepository } from '@infrastructure/repositories/address/objection-address-repository'
import { DeleteAddressUseCase } from '@use-cases/address/delete-address'

export function makeDeleteAddressController() {
  const objectionAddressRepository = new ObjectionAddressRepository()
  const deleteAddressUseCase = new DeleteAddressUseCase(objectionAddressRepository)

  const deleteAddressController = new DeleteAddressController(deleteAddressUseCase)

  return deleteAddressController
}

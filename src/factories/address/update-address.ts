import { UpdateAddressController } from '@controllers/address/update-address-controller'
import { ObjectionAddressRepository } from '@infrastructure/repositories/address/objection-address-repository'
import { UpdateAddressUseCase } from '@use-cases/address/update-address'

export function makeUpdateAddressController() {
  const objectionAddressRepository = new ObjectionAddressRepository()
  const updateAddressUseCase = new UpdateAddressUseCase(objectionAddressRepository)

  const updateAddressController = new UpdateAddressController(updateAddressUseCase)

  return updateAddressController
}

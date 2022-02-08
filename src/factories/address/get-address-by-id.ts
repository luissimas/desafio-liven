import { GetAddressByIdController } from '@controllers/address/get-by-id-controller'
import { ObjectionAddressRepository } from '@infrastructure/repositories/address/objection-address-repository'
import { GetAddressByIdUseCase } from '@use-cases/address/get-address-by-id'

export function makeGetAddressByIdController() {
  const objectionAddressRepository = new ObjectionAddressRepository()
  const getAddressByIdUseCase = new GetAddressByIdUseCase(objectionAddressRepository)

  const getAddressByIdController = new GetAddressByIdController(getAddressByIdUseCase)

  return getAddressByIdController
}

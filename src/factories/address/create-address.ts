import { CreateAddressController } from '@controllers/address/create-address-controller'
import { ObjectionAddressRepository } from '@infrastructure/repositories/address/objection-address-repository'
import { ObjectionUserRepository } from '@infrastructure/repositories/user/objection-user-repository'
import { CreateAddressUseCase } from '@use-cases/address/create-address'

export function makeCreateAddressController() {
  const objectionAddressRepository = new ObjectionAddressRepository()
  const objectionUserRepository = new ObjectionUserRepository()
  const createAddressUseCase = new CreateAddressUseCase(objectionAddressRepository, objectionUserRepository)

  const createAddressController = new CreateAddressController(createAddressUseCase)

  return createAddressController
}

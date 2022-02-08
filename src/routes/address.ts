import { Router } from 'express'
import { adaptRoute } from 'src/adapters/express/adapt-route'

import { makeCreateAddressController } from '@factories/address/create-address'
import { makeListAdressController } from '@factories/address/list-address'
import { makeGetAddressByIdController } from '@factories/address/get-address-by-id'
import { makeUpdateAddressController } from '@factories/address/update-address'
import { makeDeleteAddressController } from '@factories/address/delete-address'

import { makeCreateAddressValidation } from '@middlewares/validation/address/create-address-validation'
import { makeListAddressValidation } from '@middlewares/validation/address/list-address-validation'
import { makeGetAddressByIdValidation } from '@middlewares/validation/address/get-address-by-id-validation'
import { makeUpdateAddressValidation } from '@middlewares/validation/address/update-address-validation'
import { makeDeleteAddressValidation } from '@middlewares/validation/address/delete-address-validation'

const router = Router()

router.post('/', makeCreateAddressValidation(), adaptRoute(makeCreateAddressController()))
router.get('/', makeListAddressValidation(), adaptRoute(makeListAdressController()))
router.get('/:id', makeGetAddressByIdValidation(), adaptRoute(makeGetAddressByIdController()))
router.patch('/:id', makeUpdateAddressValidation(), adaptRoute(makeUpdateAddressController()))
router.delete('/:id', makeDeleteAddressValidation(), adaptRoute(makeDeleteAddressController()))

export { router }

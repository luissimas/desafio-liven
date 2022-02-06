import { Router } from 'express'
import { makeCreateAddressController } from '@factories/address/create-address'
import { makeListAdressController } from '@factories/address/list-address'
import { makeGetAddressByIdController } from '@factories/address/get-address-by-id'
import { makeUpdateAddressController } from '@factories/address/update-address'

const router = Router()

router.post('/address', (req, res, next) => makeCreateAddressController().handle(req, res, next))
router.get('/address', (req, res, next) => makeListAdressController().handle(req, res, next))
router.get('/address/:id', (req, res, next) => makeGetAddressByIdController().handle(req, res, next))
router.patch('/address/:id', (req, res, next) => makeUpdateAddressController().handle(req, res, next))

export { router }

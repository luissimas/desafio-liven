import { Router } from 'express'
import { makeCreateAddressController } from '@factories/address/create-address'
import { makeListAdressController } from '@factories/address/list-address'

const router = Router()

router.post('/address', (req, res, next) => makeCreateAddressController().handle(req, res, next))
router.get('/address', (req, res, next) => makeListAdressController().handle(req, res, next))

export { router }

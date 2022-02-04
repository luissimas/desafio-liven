import { Router } from 'express'
import { makeCreateAddressController } from '@factories/address/create-address'

const router = Router()

router.post('/address', (req, res, next) => makeCreateAddressController().handle(req, res, next))

export { router }

import { Router } from 'express'
import { router as user } from './user'
import { router as address } from './address'

const router = Router()

router.use('/user/address', address)
router.use('/user', user)

export { router }

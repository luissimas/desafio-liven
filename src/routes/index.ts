import { Router } from 'express'
import { router as user } from './user'
import { router as address } from './address'
import { router as docs } from './docs'

const router = Router()

router.use('/docs', docs)

router.use('/user/address', address)
router.use('/user', user)

export { router }

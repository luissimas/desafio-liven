import { Router } from 'express'
import { router as user } from './user'
import { router as address } from './address'

const router = Router()

router.use('/', user)
router.use('/', address)

export { router }

import { Router } from 'express'
import { createUserController } from '@controllers/user'

const router = Router()

router.post('/user', (req, res, next) => createUserController.handle(req, res, next))

export { router }

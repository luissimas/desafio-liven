import { Router } from 'express'
import { createUserController } from '@factories/user/create-user'
import { listUserController } from '@factories/user/list-user'

const router = Router()

router.post('/user', (req, res, next) => createUserController.handle(req, res, next))
router.get('/user', (req, res, next) => listUserController.handle(req, res, next))

export { router }

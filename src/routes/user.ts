import { Router } from 'express'
import { makeCreateUserController } from '@factories/user/create-user'
import { makeListUserController } from '@factories/user/list-user'
import { makeGetUserByIdController } from '@factories/user/get-user-by-id'
import { makeUpdateUserController } from '@factories/user/update-user'
import { makeDeleteUserController } from '@factories/user/delete-user'

const router = Router()

router.post('/user', (req, res, next) => makeCreateUserController().handle(req, res, next))
router.get('/user', (req, res, next) => makeListUserController().handle(req, res, next))
router.get('/user/:id', (req, res, next) => makeGetUserByIdController().handle(req, res, next))
router.patch('/user/:id', (req, res, next) => makeUpdateUserController().handle(req, res, next))
router.delete('/user/:id', (req, res, next) => makeDeleteUserController().handle(req, res, next))

export { router }

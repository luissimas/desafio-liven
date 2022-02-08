import { Router } from 'express'
import { adaptRoute } from 'src/adapters/express/adapt-route'

import { makeCreateUserController } from '@factories/user/create-user'
import { makeListUserController } from '@factories/user/list-user'
import { makeGetUserByIdController } from '@factories/user/get-user-by-id'
import { makeUpdateUserController } from '@factories/user/update-user'
import { makeDeleteUserController } from '@factories/user/delete-user'

import { makeCreateUserValidation } from '@middlewares/validation/user/create-user-validation'
import { makeListUserValidation } from '@middlewares/validation/user/list-user-validation'
import { makeGetUserByIdValidation } from '@middlewares/validation/user/get-user-by-id-validation'
import { makeUpdateUserValidation } from '@middlewares/validation/user/update-user-validation'
import { makeDeleteUserValidation } from '@middlewares/validation/user/delete-user-validation'

const router = Router()

router.post('/user', makeCreateUserValidation(), adaptRoute(makeCreateUserController()))
router.get('/user', makeListUserValidation(), adaptRoute(makeListUserController()))
router.get('/user/:id', makeGetUserByIdValidation(), adaptRoute(makeGetUserByIdController()))
router.patch('/user/:id', makeUpdateUserValidation(), adaptRoute(makeUpdateUserController()))
router.delete('/user/:id', makeDeleteUserValidation(), adaptRoute(makeDeleteUserController()))

export { router }

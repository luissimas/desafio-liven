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

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       properties:
 *         id:
 *           type: integer
 *         name:
 *           type: string
 *         age:
 *           type: integer
 *         email:
 *           type: string
 *         addresses:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/Address'
 */

/**
 * @swagger
 * /user:
 *   post:
 *     summary: Cadastro de usuários.
 *     description: Cadastra novos usuários no sistema.
 *     tags:
 *       - Users
 *     requestBody:
 *       content:
 *         'application/json':
 *           schema:
 *            properties:
 *              name:
 *                type: string
 *              age:
 *                type: integer
 *              email:
 *                type: string
 *              password:
 *                type: string
 *            required:
 *              - name
 *              - age
 *              - email
 *              - password
 *           example:
 *             name: Jorge Silva
 *             age: 38
 *             email: jorge@hotmail.com
 *             password: s3nh41098
 *     responses:
 *      '201':
 *        description: Usuário cadastrado com sucesso.
 *        content:
 *          application/json:
 *            schema:
 *              properties:
 *                id:
 *                  type: string
 *                  description: Identificador `id` do usuário criado.
 *      '400':
 *        description: Erro na validação dos campos.
 *      '500':
 *        description: Erro interno no servidor
 */
router.post('/', makeCreateUserValidation(), adaptRoute(makeCreateUserController()))

/**
 * @swagger
 * /user:
 *   get:
 *     summary: Listar usuários.
 *     description: Lista todos os usuários do sistema e seus endereços.
 *     tags:
 *       - Users
 *     responses:
 *      '200':
 *        description: Usuários listados com sucesso.
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/User'
 *      '500':
 *        description: Erro interno no servidor.
 */
router.get('/', makeListUserValidation(), adaptRoute(makeListUserController()))

/**
 * @swagger
 * /user/{id}:
 *   get:
 *     summary: Listar um usuário.
 *     description: Lista um usuário e seus endereços dado seu `id`.
 *     tags:
 *       - Users
 *     parameters:
 *       - name: id
 *         in: path
 *     responses:
 *      '200':
 *        description: Usuário listado com sucesso.
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/User'
 *      '400':
 *        description: Erro na validação do parâmetro `id`.
 *      '404':
 *        description: Usuário não encontrado.
 *      '500':
 *        description: Erro interno no servidor.
 */
router.get('/:id', makeGetUserByIdValidation(), adaptRoute(makeGetUserByIdController()))

/**
 * @swagger
 * /user/{id}:
 *   patch:
 *     summary: Atualização de usuários.
 *     description: Atualiza os dados de um usuário.
 *     tags:
 *       - Users
 *     parameters:
 *       - name: id
 *         in: path
 *     requestBody:
 *       content:
 *         'application/json':
 *           schema:
 *            properties:
 *              name:
 *                type: string
 *              age:
 *                type: integer
 *              email:
 *                type: string
 *              password:
 *                type: string
 *           example:
 *             name: Jorge Silva
 *             age: 38
 *             email: jorge@hotmail.com
 *             password: s3nh41098
 *     responses:
 *      '204':
 *        description: Usuário atualizado com sucesso.
 *      '400':
 *        description: Erro na validação dos campos.
 *      '500':
 *        description: Erro interno no servidor
 */
router.patch('/:id', makeUpdateUserValidation(), adaptRoute(makeUpdateUserController()))

/**
 * @swagger
 * /user/{id}:
 *   delete:
 *     summary: Remoção de usuários.
 *     description: Remove um usuário do sistema.
 *     tags:
 *       - Users
 *     parameters:
 *       - name: id
 *         in: path
 *     responses:
 *      '400':
 *        description: Erro na validação do parâmetro `id`.
 *      '204':
 *        description: Usuário removido com sucesso.
 *      '500':
 *        description: Erro interno no servidor
 */
router.delete('/:id', makeDeleteUserValidation(), adaptRoute(makeDeleteUserController()))

export { router }

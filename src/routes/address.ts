import { Router } from 'express'
import { adaptRoute } from 'src/adapters/express/adapt-route'

import { makeCreateAddressController } from '@factories/address/create-address'
import { makeListAdressController } from '@factories/address/list-address'
import { makeGetAddressByIdController } from '@factories/address/get-address-by-id'
import { makeUpdateAddressController } from '@factories/address/update-address'
import { makeDeleteAddressController } from '@factories/address/delete-address'

import { makeCreateAddressValidation } from '@middlewares/validation/address/create-address-validation'
import { makeListAddressValidation } from '@middlewares/validation/address/list-address-validation'
import { makeGetAddressByIdValidation } from '@middlewares/validation/address/get-address-by-id-validation'
import { makeUpdateAddressValidation } from '@middlewares/validation/address/update-address-validation'
import { makeDeleteAddressValidation } from '@middlewares/validation/address/delete-address-validation'

const router = Router()

/**
 * @swagger
 * components:
 *   schemas:
 *     Address:
 *       properties:
 *         id:
 *           type: integer
 *         idUser:
 *           type: string
 *         state:
 *           type: string
 *         country:
 *           type: string
 *         city:
 *           type: string
 *         zipcode:
 *           type: string
 *         street:
 *           type: string
 *         number:
 *           type: string
 */

/**
 * @swagger
 * /user/address:
 *   post:
 *     summary: Cadastro de endereços.
 *     description: Cadastra um novo endereço para um usuário.
 *     tags:
 *       - Addresses
 *     requestBody:
 *       content:
 *         'application/json':
 *           schema:
 *            properties:
 *              idUser:
 *                type: string
 *              state:
 *                type: string
 *              country:
 *                type: string
 *              city:
 *                type: string
 *              zipcode:
 *                type: string
 *              street:
 *                type: string
 *              number:
 *                type: string
 *            required:
 *              - idUser
 *              - state
 *              - country
 *              - city
 *              - zipcode
 *              - street
 *              - number
 *           example:
 *             idUser: 70d42be0-aa36-48d0-a9dc-025257742988
 *             state: SP
 *             country: Brasil
 *             city: São Carlos
 *             zipcode: 13982-500
 *             street: Avenida São Carlos
 *             number: 1381
 *     responses:
 *      '201':
 *        description: Endereço cadastrado com sucesso.
 *        content:
 *          application/json:
 *            schema:
 *              properties:
 *                id:
 *                  type: string
 *                  description: Identificador `id` do endereço criado.
 *      '400':
 *        description: Erro na validação dos campos.
 *      '404':
 *        description: Usuário identificado por `idUser` não encontrado.
 *      '500':
 *        description: Erro interno no servidor
 */
router.post('/', makeCreateAddressValidation(), adaptRoute(makeCreateAddressController()))

/**
 * @swagger
 * /user/address:
 *   get:
 *     summary: Listar endereços.
 *     description: Lista todos os endereços do sistema.
 *     tags:
 *       - Addresses
 *     responses:
 *      '200':
 *        description: Endereços listados com sucesso.
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Address'
 *      '500':
 *        description: Erro interno no servidor.
 */
router.get('/', makeListAddressValidation(), adaptRoute(makeListAdressController()))

/**
 * @swagger
 * /user/address/{id}:
 *   get:
 *     summary: Listar um endereço.
 *     description: Lista um endereços dado seu `id`.
 *     tags:
 *       - Addresses
 *     parameters:
 *       - name: id
 *         in: path
 *     responses:
 *      '200':
 *        description: Endereço listado com sucesso.
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Address'
 *      '400':
 *        description: Erro na validação do parâmetro `id`.
 *      '404':
 *        description: Endereço não encontrado.
 *      '500':
 *        description: Erro interno no servidor.
 */
router.get('/:id', makeGetAddressByIdValidation(), adaptRoute(makeGetAddressByIdController()))

/**
 * @swagger
 * /user/address/{id}:
 *   patch:
 *     summary: Atualização  de endereços.
 *     description: Atualiza os dados de um endereço.
 *     tags:
 *       - Addresses
 *     requestBody:
 *       content:
 *         'application/json':
 *           schema:
 *            properties:
 *              state:
 *                type: string
 *              country:
 *                type: string
 *              city:
 *                type: string
 *              zipcode:
 *                type: string
 *              street:
 *                type: string
 *              number:
 *                type: string
 *     responses:
 *      '204':
 *        description: Endereço atualizado com sucesso.
 *      '400':
 *        description: Erro na validação dos campos.
 *      '500':
 *        description: Erro interno no servidor
 */
router.patch('/:id', makeUpdateAddressValidation(), adaptRoute(makeUpdateAddressController()))

/**
 * @swagger
 * /user/address/{id}:
 *   delete:
 *     summary: Remoção de endereços.
 *     description: Remove um endereço do sistema.
 *     tags:
 *       - Addresses
 *     parameters:
 *       - name: id
 *         in: path
 *     responses:
 *      '400':
 *        description: Erro na validação do parâmetro `id`.
 *      '204':
 *        description: Endereço removido com sucesso.
 *      '500':
 *        description: Erro interno no servidor
 */
router.delete('/:id', makeDeleteAddressValidation(), adaptRoute(makeDeleteAddressController()))

export { router }

import { Router } from 'express'
import swaggerUi from 'swagger-ui-express'
import swaggerJsDoc from 'swagger-jsdoc'

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Treinamento Liven',
      version: '0.0.0',
    },
  },
  apis: ['./src/routes/*.ts'],
}

const specs = swaggerJsDoc(options)

const router = Router()

router.use('/', swaggerUi.serve)
router.use('/', swaggerUi.setup(specs))

export { router }

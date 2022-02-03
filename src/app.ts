import express from 'express'
import { router } from './routes'
import { ErrorHandler } from './middlewares/error-handler'

// Loading dotenv config
import 'dotenv/config'

const app = express()

app.use(express.json())
app.use(router)
app.use(ErrorHandler.handle)

export { app }

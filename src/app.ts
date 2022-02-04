import express from 'express'
import { router } from '@routes'
import { handler } from '@middlewares/error-handler'

// Loading dotenv config
import 'dotenv/config'

const app = express()

app.use(express.json())
app.use(router)
app.use(handler)

export { app }

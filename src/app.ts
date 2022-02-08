import express from 'express'
import { router } from '@routes'
import { handler } from '@middlewares/error-handler'
import { databaseSetup } from '@infrastructure/database/objection'
import { errors } from 'celebrate'

// Loading dotenv config
import 'dotenv/config'

// Setting up database
databaseSetup()

const app = express()

app.use(express.json())
app.use(router)

// Celebrate error handler
app.use(errors())

// Custom error handler
app.use(handler)

export { app }

import express from 'express'
import { router } from './routes'

// TODO: Error handler
//import {handler} from "./error"

// Loading dotenv config
import 'dotenv/config'

const app = express()

app.use(express.json())
app.use(router)
// app.use(handler)

export { app }

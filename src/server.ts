import { app } from './app'

// TODO: Make this a env variable
const port = process.env.PORT

app.listen(port, () => console.log(`Listening on port ${port}...`))

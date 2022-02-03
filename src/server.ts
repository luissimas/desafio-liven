import { app } from './app'

// TODO: Make this a env variable
const port = 3333

app.listen(port, () => console.log(`Listening on port ${port}...`))

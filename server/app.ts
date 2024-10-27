import express from 'express'
import dotenv from 'dotenv'
import { dbConnect } from './config/dbConnect'
import { startApolloServer } from './apollo/apollo_server'

dotenv.config({ path: 'config/.env.local' })

const app = express()

app.use(express.json())

dbConnect()

app.get('/', (req, res) => {
  res.send('Hello World')
})

const PORT = process.env.PORT
async function startServer() {
  await startApolloServer(app)
  app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT} at http://localhost:${PORT}`)
  })
}

startServer()

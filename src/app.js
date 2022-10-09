import express from 'express'
import charactersRoutes from './routes/characters.routes.js'

const app = express()

// middlewares
app.use(express.json())

// routes
app.use(charactersRoutes)

export default app
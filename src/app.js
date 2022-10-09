import express from 'express'
import morgan from 'morgan'
import charactersRoutes from './routes/characters.routes.js'

const app = express()

// middlewares
app.use(express.json())
app.use(morgan('dev'))

// routes
app.use(charactersRoutes)

export default app
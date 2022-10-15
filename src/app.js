import express from 'express'
import morgan from 'morgan'
import charactersRoutes from './routes/characters.routes.js'
import authenticationsRoutes from './routes/user.routes.js'

const app = express()

// middlewares
app.use(express.json())
app.use(morgan('dev'))

// routes
app.use(charactersRoutes)
app.use('/api/v1', authenticationsRoutes)

export default app
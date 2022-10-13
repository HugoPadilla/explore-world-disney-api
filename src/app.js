import express from 'express'
import morgan from 'morgan'
import charactersRoutes from './routes/characters.routes.js'
import moviesRoutes from './routes/movies.routes.js'

const app = express()

// middlewares
app.use(express.json())
app.use(morgan('dev'))

// routes
app.use(charactersRoutes)
app.use('/api/v1', moviesRoutes)

export default app
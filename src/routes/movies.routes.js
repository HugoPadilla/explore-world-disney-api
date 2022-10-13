import { Router } from 'express'
import { deleteMovie, getMovie, getMovies, insertMovie, updateMovie } from '../controllers/movie.controller.js'

const router = Router()

router.get('/movies', getMovies)
router.get('/movies/:id', getMovie)
router.post('/movies', insertMovie)
router.put('/movies/:id', updateMovie)
router.delete('/movies/:id', deleteMovie)

export default router
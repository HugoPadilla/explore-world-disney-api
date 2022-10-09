import { Router } from 'express'
import { getCharacter, getCharacters, insertCharacter } from '../controllers/character.controller.js'

const router = Router()

router.get('/api/characters', getCharacters)
router.get('/api/characters/:id', getCharacter)
router.post('/api/characters', insertCharacter)

export default router
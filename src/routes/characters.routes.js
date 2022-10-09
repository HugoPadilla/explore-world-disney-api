import { Router } from 'express'
import {
  deleteCharacter,
  getCharacter,
  getCharacters,
  insertCharacter,
  updateCharacter
} from '../controllers/character.controller.js'

const router = Router()

router.get('/api/characters', getCharacters)
router.get('/api/characters/:id', getCharacter)
router.post('/api/characters', insertCharacter)
router.put('/api/characters/:id', updateCharacter)
router.delete('/api/characters/:id', deleteCharacter)

export default router
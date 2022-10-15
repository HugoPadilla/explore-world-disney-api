import { Router } from 'express'
import { createUser, getUsers, loginUser } from '../controllers/user.controller.js'

const router = Router()

router.get('/auth/users', getUsers)
router.post('/auth/login', loginUser)
router.post('/auth/register', createUser)

export default router
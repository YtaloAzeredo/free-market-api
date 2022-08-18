import UsersController from '@controllers/users.controller'
import { Router } from 'express'
const router = Router()

router.get('/users', UsersController.getAll)
router.get('/users/:id', UsersController.get)
router.post('/users', UsersController.store)
router.delete('/users/:id', UsersController.delete)
router.put('/users/:id', UsersController.update)

export default router

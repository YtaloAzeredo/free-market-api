import AddressesController from '@controllers/addresses.controller'
import { Router } from 'express'
const router = Router()

router.get('/addresses', AddressesController.getAll)
router.get('/addresses/:id', AddressesController.get)
router.post('/addresses', AddressesController.store)
router.delete('/addresses/:id', AddressesController.delete)
router.put('/addresses/:id', AddressesController.update)

export default router

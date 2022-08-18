import ProductCategoriesController from '@controllers/product-categories.controller'
import { Router } from 'express'
const router = Router()

router.get('/product-categories', ProductCategoriesController.getAll)
router.get('/product-categories/:id', ProductCategoriesController.get)
router.post('/product-categories', ProductCategoriesController.store)
router.delete('/product-categories/:id', ProductCategoriesController.delete)
router.put('/product-categories/:id', ProductCategoriesController.update)

export default router

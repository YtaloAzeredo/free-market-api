import { createProductCategoriesController } from '@modules/product-categories/use-cases/create-product-categories'
import { deleteProductCategoriesController } from '@modules/product-categories/use-cases/delete-product-categories'
import { getAllProductCategoriesController } from '@modules/product-categories/use-cases/get-all-product-categories'
import { getOneProductCategoriesController } from '@modules/product-categories/use-cases/get-one-product-categories'
import { updateProductCategoriesController } from '@modules/product-categories/use-cases/update-product-categories'

import { Router } from 'express'
const router = Router()

router.get('/product-categories', (req, res) => getAllProductCategoriesController.handle(req, res))
router.get('/product-categories/:id', (req, res) => getOneProductCategoriesController.handle(req, res))
router.post('/product-categories', (req, res) => createProductCategoriesController.handle(req, res))
router.delete('/product-categories/:id', (req, res) => deleteProductCategoriesController.handle(req, res))
router.put('/product-categories/:id', (req, res) => updateProductCategoriesController.handle(req, res))

export default router

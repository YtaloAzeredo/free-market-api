import { getAllProductsController } from '@modules/products/use-cases/get-all-products'
import { getOneProductsController } from '@modules/products/use-cases/get-one-products'
import { createProductsController } from '@modules/products/use-cases/create-products'
import { deleteProductsController } from '@modules/products/use-cases/delete-products'
import { updateProductsController } from '@modules/products/use-cases/update-products'
import { Router } from 'express'
const router = Router()

router.get('/products', (req, res) => getAllProductsController.handle(req, res))
router.get('/products/:id', (req, res) => getOneProductsController.handle(req, res))
router.post('/products', (req, res) => createProductsController.handle(req, res))
router.delete('/products/:id', (req, res) => deleteProductsController.handle(req, res))
router.put('/products/:id', (req, res) => updateProductsController.handle(req, res))

export default router

import { ProductsRepository } from '@modules/products/repositories/type-orm/products.repository'
import { UpdateProductsController } from './update-products.controller'
import { UpdateProductsUseCase } from './update-products.use-case'

const productsRepository = new ProductsRepository()
const updateProductsUseCase = new UpdateProductsUseCase(productsRepository)
export const updateProductsController = new UpdateProductsController(updateProductsUseCase)

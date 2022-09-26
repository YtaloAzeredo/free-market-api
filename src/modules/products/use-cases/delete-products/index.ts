import { ProductsRepository } from '@modules/products/repositories/type-orm/products.repository'
import { DeleteProductsController } from './delete-products.controller'
import { DeleteProductsUseCase } from './delete-products.use-case'

const productsRepository = new ProductsRepository()
const deleteProductsUseCase = new DeleteProductsUseCase(productsRepository)
export const deleteProductsController = new DeleteProductsController(deleteProductsUseCase)

import { ProductsRepository } from '@modules/products/repositories/products.repository'
import { CreateProductsController } from './create-products.controller'
import { CreateProductsUseCase } from './create-products.use-case'

const productsRepository = new ProductsRepository()
const createProductsUseCase = new CreateProductsUseCase(productsRepository)
export const createProductsController = new CreateProductsController(createProductsUseCase)

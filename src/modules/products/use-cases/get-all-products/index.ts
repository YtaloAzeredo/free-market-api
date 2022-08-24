import { ProductsRepository } from '@modules/products/repositories/products.repository'
import { GetAllProductsController } from './get-all-products.controller'
import { GetAllProductsUseCase } from './get-all-products.use-case'

const productsRepository = new ProductsRepository()
const getAllProductsUseCase = new GetAllProductsUseCase(productsRepository)
export const getAllProductsController = new GetAllProductsController(getAllProductsUseCase)

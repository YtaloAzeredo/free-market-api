import { ProductsRepository } from '@modules/products/repositories/products.repository'
import { GetOneProductsController } from './get-one-products.controller'
import { GetOneProductsUseCase } from './get-one-products.use-case'

const productsRepository = new ProductsRepository()
const getOneProductsUseCase = new GetOneProductsUseCase(productsRepository)
export const getOneProductsController = new GetOneProductsController(getOneProductsUseCase)

import { ProductCategoriesRepository } from '@modules/product-categories/repositories/product-categories.repository'
import { ProductsRepository } from '@modules/products/repositories/type-orm/products.repository'
import { CreateProductsController } from './create-products.controller'
import { CreateProductsUseCase } from './create-products.use-case'

const productsRepository = new ProductsRepository()
const productCategoriesRepository = new ProductCategoriesRepository()
const createProductsUseCase = new CreateProductsUseCase(productsRepository, productCategoriesRepository)
export const createProductsController = new CreateProductsController(createProductsUseCase)

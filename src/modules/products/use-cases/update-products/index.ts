import { ProductCategoriesRepository } from '@modules/product-categories/repositories/type-orm/product-categories.repository'
import { ProductsRepository } from '@modules/products/repositories/type-orm/products.repository'
import { UpdateProductsController } from './update-products.controller'
import { UpdateProductsUseCase } from './update-products.use-case'

const productsRepository = new ProductsRepository()
const productCategoriesRepository = new ProductCategoriesRepository()
const updateProductsUseCase = new UpdateProductsUseCase(productsRepository, productCategoriesRepository)
export const updateProductsController = new UpdateProductsController(updateProductsUseCase)

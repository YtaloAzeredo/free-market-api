import { ProductCategoriesRepository } from '@modules/product-categories/repositories/type-orm/product-categories.repository'
import { DeleteProductCategoriesController } from './delete-product-categories.controller'
import { DeleteProductCategoriesUseCase } from './delete-product-categories.use-case'

const productCategoryRepository = new ProductCategoriesRepository()
const deleteProductCategoriesUseCase = new DeleteProductCategoriesUseCase(productCategoryRepository)
export const deleteProductCategoriesController = new DeleteProductCategoriesController(deleteProductCategoriesUseCase)

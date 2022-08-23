import { ProductCategoriesRepository } from '@modules/product-categories/repositories/product-categories.repository'
import { UpdateProductCategoriesController } from './update-product-categories.controller'
import { UpdateProductCategoriesUseCase } from './update-product-categories.use-case'

const productCategoryRepository = new ProductCategoriesRepository()
const updateProductCategoriesUseCase = new UpdateProductCategoriesUseCase(productCategoryRepository)
export const updateProductCategoriesController = new UpdateProductCategoriesController(updateProductCategoriesUseCase)

import { ProductCategoriesRepository } from '@modules/product-categories/repositories/type-orm/product-categories.repository'
import { CreateProductCategoriesController } from './create-product-categories.controller'
import { CreateProductCategoriesUseCase } from './create-product-categories.use-case'

const productCategoryRepository = new ProductCategoriesRepository()
const createProductCategoriesUseCase = new CreateProductCategoriesUseCase(productCategoryRepository)
export const createProductCategoriesController = new CreateProductCategoriesController(createProductCategoriesUseCase)

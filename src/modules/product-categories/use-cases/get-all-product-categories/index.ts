import { ProductCategoriesRepository } from '@modules/product-categories/repositories/type-orm/product-categories.repository'
import { GetAllProductCategoriesController } from './get-all-product-categories.controller'
import { GetAllProductCategoriesUseCase } from './get-all-product-categories.use-case'

const productCategoryRepository = new ProductCategoriesRepository()
const getAllProductCategoriesUseCase = new GetAllProductCategoriesUseCase(productCategoryRepository)
export const getAllProductCategoriesController = new GetAllProductCategoriesController(getAllProductCategoriesUseCase)

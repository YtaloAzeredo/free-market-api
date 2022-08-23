import { ProductCategoriesRepository } from '@modules/product-categories/repositories/product-categories.repository'
import { GetOneProductCategoriesController } from './get-one-product-categories.controller'
import { GetOneProductCategoriesUseCase } from './get-one-product-categories.use-case'

const productCategoryRepository = new ProductCategoriesRepository()
const getOneProductCategoriesUseCase = new GetOneProductCategoriesUseCase(productCategoryRepository)
export const getOneProductCategoriesController = new GetOneProductCategoriesController(getOneProductCategoriesUseCase)

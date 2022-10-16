import { IRepository } from '@interfaces/repository.interface'
import { ProductCategories } from '../models/type-orm/product-categories.model'

export interface IProductCategoriesRepository extends IRepository {
  getAll(data?: any): Promise<ProductCategories[]>
  getOne(data: any): Promise<ProductCategories>
  add(data: any): ProductCategories
  store(data: any): Promise<ProductCategories>
  save(data: any): Promise<ProductCategories>
  remove(data: any): Promise<ProductCategories>
}

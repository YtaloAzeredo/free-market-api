import { IRepository } from '@interfaces/repository.interface'
import { ProductsModel } from '../models/products-model.interface'

export interface IProductsRepository extends IRepository {
  getAll(data?: any): Promise<ProductsModel[]>
  getOne(data: any): Promise<ProductsModel>
  add(data: any): ProductsModel
  store(data: any): Promise<ProductsModel>
  save(data: any): Promise<ProductsModel>
  remove(data: any): Promise<void>
}

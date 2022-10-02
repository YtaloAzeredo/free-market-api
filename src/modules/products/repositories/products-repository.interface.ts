import { IRepository } from '@interfaces/repository.interface'
import { Products } from '../models/type-orm/products.model'

export interface IProductsRepository extends IRepository {
  getAll(data: any): Promise<Products[]>
  getOne(data: any): Promise<Products>
  add(data: any): Products
  store(data: any): Promise<Products>
  save(data: any): Promise<Products>
  remove(data: any): Promise<void>
}

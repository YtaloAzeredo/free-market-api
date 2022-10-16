import { ProductsModel } from '@modules/products/models/products-model.interface'
import { UsersModel } from '@modules/users/models/users-model.interface'

export interface SalesDataModel {
  id: number
  seller: UsersModel
  buyer: UsersModel
  products: ProductsModel[]
}

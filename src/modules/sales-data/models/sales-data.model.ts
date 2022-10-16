import { ProductsModel } from '@modules/products/models/products.model'
import { UsersModel } from '@modules/users/models/users.model'

export class SalesDataModel {
  id!: number
  seller!: UsersModel
  buyer!: UsersModel
  products!: ProductsModel[]
}

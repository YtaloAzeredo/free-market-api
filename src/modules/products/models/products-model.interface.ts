import { ProductCategoriesModel } from '@modules/product-categories/models/product-categories-model.interface'

export interface ProductsModel {
  id: number
  description: string
  price: number
  quantity: number
  category: ProductCategoriesModel
}

import { ProductCategoriesModel } from '@modules/product-categories/models/product-categories.model'

export class ProductsModel {
  id!: number
  description!: string
  price!: number
  quantity!: number
  category!: ProductCategoriesModel
}

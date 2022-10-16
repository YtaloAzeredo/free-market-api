import { ProductCategories } from '@modules/product-categories/models/type-orm/product-categories.model'
import { Abstract } from '../../../../repositories/abstract.repository'
import { IProductCategoriesRepository } from '../product-categories-repository.interface'

export class ProductCategoriesRepository extends Abstract implements IProductCategoriesRepository {
  constructor () {
    super('ProductCategory')
  }

  async getAll (): Promise<ProductCategories[]> {
    return ProductCategories.find()
  }

  async getOne ({ id, code }: { id?: number, code?: string }): Promise<ProductCategories> {
    const response = await ProductCategories.findOneBy({ id, code }) as ProductCategories
    return response
  }

  add (dataValues: ProductCategories): ProductCategories {
    return ProductCategories.create(dataValues)
  }

  async store (dataValues: ProductCategories): Promise<ProductCategories> {
    const response = ProductCategories.create(dataValues)
    return response.save()
  }

  async save (request: ProductCategories): Promise<ProductCategories> {
    return request.save()
  }

  async remove (request: ProductCategories): Promise<ProductCategories> {
    return request.remove()
  }
}

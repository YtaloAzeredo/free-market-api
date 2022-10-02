import { ProductCategories } from '@modules/product-categories/models/type-orm/product-categories.model'
import NotFoundError from '@errors/not-found.error'
import { Abstract } from '../../../../repositories/abstract.repository'
import { IProductCategoriesRepository } from '../product-categories-repository.interface'

export class ProductCategoriesRepository extends Abstract implements IProductCategoriesRepository {
  constructor () {
    super('ProductCategory')
  }

  async getAll ({ throws }: { throws?: boolean } = {}): Promise<ProductCategories[]> {
    const response = await ProductCategories.find()
    if (!response.length && throws) throw new NotFoundError(this.getNotFoundError())
    return response
  }

  async getOne ({ id, code, throws }: { id?: number, code?: string, throws?: boolean }): Promise<ProductCategories> {
    const response = await ProductCategories.findOneBy({ id, code }) as ProductCategories
    if (!response && throws) throw new NotFoundError(this.getNotFoundError())
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

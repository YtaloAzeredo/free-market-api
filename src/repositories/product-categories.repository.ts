import { ProductCategories } from '@models/product-categories.model'
import NotFoundError from '@errors/not-found.error'
import { Abstract } from './abstract.repository'

class ProductCategoriesRepository extends Abstract {
  constructor () {
    super('ProductCategory')
  }

  async getAll ({ throws }: { throws?: boolean } = {}): Promise<ProductCategories[]> {
    const response = await ProductCategories.find()
    if (!response.length && throws) throw new NotFoundError(this.getNotFoundError())
    return response
  }

  async getOneBy ({ id, code, throws }: { id?: number, code?: string, throws?: boolean }): Promise<ProductCategories> {
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

export default new ProductCategoriesRepository()

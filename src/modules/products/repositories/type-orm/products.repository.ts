import { Abstract } from '../../../../repositories/abstract.repository'
import { IProductsRepository } from '../products-repository.interface'
import { ProductsModel } from '../../models/products-model.interface'
import { Products } from '../../models/type-orm/products.model'

export class ProductsRepository extends Abstract implements IProductsRepository {
  constructor () {
    super('Products')
  }

  async getAll (): Promise<ProductsModel[]> {
    return Products.find()
  }

  async getOne ({ id }: { id: number }): Promise<ProductsModel> {
    const response = await Products.findOneBy({ id }) as ProductsModel
    return response
  }

  add (dataValues: Products): ProductsModel {
    return Products.create(dataValues)
  }

  async store (dataValues: Products): Promise<ProductsModel> {
    const response = Products.create(dataValues)
    return response.save()
  }

  async save (request: Products): Promise<ProductsModel> {
    return request.save()
  }

  async remove (request: Products): Promise<void> {
    await request.remove()
  }
}

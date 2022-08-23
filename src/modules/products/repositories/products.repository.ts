import NotFoundError from '@errors/not-found.error'
import { Abstract } from '../../../repositories/abstract.repository'
import { IProductsRepository } from './products-repository.interface'
import { Products } from '../models/products.model'

export class ProductsRepository extends Abstract implements IProductsRepository {
  constructor () {
    super('Products')
  }

  async getAll ({ throws }: { throws?: boolean } = {}): Promise<Products[]> {
    const response = await Products.find()
    if (!response.length && throws) throw new NotFoundError(this.getNotFoundError())
    return response
  }

  async getOne ({ id, throws }: { id?: number, throws?: boolean }): Promise<Products> {
    const response = await Products.findOneBy({ id }) as Products
    if (!response && throws) throw new NotFoundError(this.getNotFoundError())
    return response
  }

  add (dataValues: Products): Products {
    return Products.create(dataValues)
  }

  async store (dataValues: Products): Promise<Products> {
    const response = Products.create(dataValues)
    return response.save()
  }

  async save (request: Products): Promise<Products> {
    return request.save()
  }

  async remove (request: Products): Promise<Products> {
    return request.remove()
  }
}

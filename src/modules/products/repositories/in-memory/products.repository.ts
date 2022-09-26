import { Abstract } from '../../../../repositories/abstract.repository'
import { IProductsRepository } from '../products-repository.interface'
import { Products } from '../../models/products.model'

const productMockedData = {
  description: 'test',
  price: 1000,
  quantity: 10
}

export class ProductsRepository extends Abstract implements IProductsRepository {
  private products: Products[] = []
  private productId: number = 0
  constructor () {
    super('Products')
  }

  async getAll ({ throws }: { throws?: boolean } = {}): Promise<Products[]> {
    return Promise.resolve(this.products)
  }

  async getOne ({ id, throws }: { id?: number, throws?: boolean }): Promise<Products> {
    const foundProduct = this.products.find(product => product.id === id) as Products
    return Promise.resolve(foundProduct)
  }

  add (dataValues: Products): Products {
    return this.factory(dataValues)
  }

  async store (dataValues: Products): Promise<Products> {
    const response = this.factory(dataValues)
    return Promise.resolve(response)
  }

  async save (request: Products): Promise<Products> {
    this.products.push(request)
    return Promise.resolve(request)
  }

  async remove (request: Products): Promise<void> {
    this.products = this.products.filter(product => product !== request)
  }

  factory (dataOptions?: Products): Products {
    const product: any = {
      ...productMockedData,
      ...dataOptions,
      id: ++this.productId
    };
    this.products.push(product)
    return product;
  }
}

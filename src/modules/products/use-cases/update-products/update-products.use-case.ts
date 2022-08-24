import { IUseCase } from '@interfaces/use-case.interface'
import { Products } from '@modules/products/models/products.model'
import { IProductsRepository } from '@modules/products/repositories/products-repository.interface'

export class UpdateProductsUseCase implements IUseCase {
  constructor (
    private readonly productsRepository: IProductsRepository
  ) {}

  async execute (productsData: Products): Promise<Products> {
    const response = await this.productsRepository.getOne({ id: productsData.id, throws: true })
    response.description = productsData.description
    response.price = productsData.price
    response.quantity = productsData.quantity
    response.category = productsData.category
    return this.productsRepository.save(response)
  }
}

import NotFoundError from '@errors/not-found.error'
import { IUseCase } from '@interfaces/use-case.interface'
import { ProductsModel } from '@modules/products/models/products.model'
import { IProductsRepository } from '@modules/products/repositories/products-repository.interface'

export class GetOneProductsUseCase implements IUseCase {
  constructor (
    private readonly productsRepository: IProductsRepository
  ) {}

  async execute (id: number): Promise<ProductsModel> {
    const product = await this.productsRepository.getOne({ id })
    if (!product) throw new NotFoundError('Product not found')
    return product
  }
}

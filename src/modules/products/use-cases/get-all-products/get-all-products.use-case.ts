import NotFoundError from '@errors/not-found.error'
import { IUseCase } from '@interfaces/use-case.interface'
import { ProductsModel } from '@modules/products/models/products.model'
import { IProductsRepository } from '@modules/products/repositories/products-repository.interface'

export class GetAllProductsUseCase implements IUseCase {
  constructor (
    private readonly productsRepository: IProductsRepository
  ) {}

  async execute (): Promise<ProductsModel[]> {
    const products = await this.productsRepository.getAll()
    if (!products.length) throw new NotFoundError('Nenhum produto encontrado')
    return products
  }
}

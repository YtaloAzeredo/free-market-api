import NotFoundError from '@errors/not-found.error'
import { IUseCase } from '@interfaces/use-case.interface'
import { ProductsModel } from '@modules/products/models/products-model.interface'
import { IProductsRepository } from '@modules/products/repositories/products-repository.interface'

export class GetAllProductsUseCase implements IUseCase {
  constructor (
    private readonly productsRepository: IProductsRepository
  ) {}

  async execute (): Promise<ProductsModel[]> {
    const foundProducts = await this.productsRepository.getAll()
    if (!foundProducts.length) throw new NotFoundError(this.productsRepository.getNotFoundMessage())
    return foundProducts
  }
}

import NotFoundError from '@errors/not-found.error'
import { IUseCase } from '@interfaces/use-case.interface'
import { ProductsModel } from '@modules/products/models/products-model.interface'
import { IProductsRepository } from '@modules/products/repositories/products-repository.interface'

export class GetOneProductsUseCase implements IUseCase {
  constructor (
    private readonly productsRepository: IProductsRepository
  ) {}

  async execute (id: number): Promise<ProductsModel> {
    const foundProduct = await this.productsRepository.getOne({ id })
    if (!foundProduct) throw new NotFoundError(this.productsRepository.getNotFoundMessage())
    return foundProduct
  }
}

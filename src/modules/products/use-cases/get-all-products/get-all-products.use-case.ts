import { IUseCase } from '@interfaces/use-case.interface'
import { Products } from '@modules/products/models/products.model'
import { IProductsRepository } from '@modules/products/repositories/products-repository.interface'

export class GetAllProductsUseCase implements IUseCase {
  constructor (
    private readonly productsRepository: IProductsRepository
  ) {}

  async execute (): Promise<Products[]> {
    return this.productsRepository.getAll({ throws: true })
  }
}

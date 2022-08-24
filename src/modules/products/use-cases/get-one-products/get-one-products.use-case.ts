import { IUseCase } from '@interfaces/use-case.interface'
import { Products } from '@modules/products/models/products.model'
import { IProductsRepository } from '@modules/products/repositories/products-repository.interface'

export class GetOneProductsUseCase implements IUseCase {
  constructor (
    private readonly productsRepository: IProductsRepository
  ) {}

  async execute (id: number): Promise<Products> {
    return this.productsRepository.getOne({ id, throws: true })
  }
}

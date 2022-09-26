import NotFoundError from '@errors/not-found.error'
import { IUseCase } from '@interfaces/use-case.interface'
import { Products } from '@modules/products/models/products.model'
import { IProductsRepository } from '@modules/products/repositories/products-repository.interface'

export class GetAllProductsUseCase implements IUseCase {
  constructor (
    private readonly productsRepository: IProductsRepository
  ) {}

  async execute (): Promise<Products[]> {
    const products = await this.productsRepository.getAll({ throws: false })
    if (!products.length) throw new NotFoundError('Nenhum produto encontrado')
    return products
  }
}

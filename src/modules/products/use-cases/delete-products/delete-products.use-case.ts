import NotFoundError from '@errors/not-found.error'
import { IUseCase } from '@interfaces/use-case.interface'
import { IProductsRepository } from '@modules/products/repositories/products-repository.interface'

export class DeleteProductsUseCase implements IUseCase {
  constructor (
    private readonly productsRepository: IProductsRepository
  ) {}

  async execute (id: number): Promise<string> {
    const foundProduct = await this.productsRepository.getOne({ id })
    if (!foundProduct) throw new NotFoundError(this.productsRepository.getNotFoundMessage())
    await this.productsRepository.remove(foundProduct)
    return this.productsRepository.getDeleteMessage()
  }
}

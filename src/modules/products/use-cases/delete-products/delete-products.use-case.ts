import NotFoundError from '@errors/not-found.error'
import { IUseCase } from '@interfaces/use-case.interface'
import { IProductsRepository } from '@modules/products/repositories/products-repository.interface'

export class DeleteProductsUseCase implements IUseCase {
  constructor (
    private readonly productsRepository: IProductsRepository
  ) {}

  async execute (id: number): Promise<string> {
    const response = await this.productsRepository.getOne({ id })
    if (!response) throw new NotFoundError('Product not found')
    await this.productsRepository.remove(response)
    return this.productsRepository.getDeleteMessage()
  }
}

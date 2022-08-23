import { IUseCase } from '@interfaces/use-case.interface'
import { IProductCategoriesRepository } from '@modules/product-categories/repositories/product-categories-repository.interface'

export class DeleteProductCategoriesUseCase implements IUseCase {
  constructor (
    private readonly productCategoriesRepository: IProductCategoriesRepository
  ) {}

  async execute (id: number): Promise<string> {
    const response = await this.productCategoriesRepository.getOne({ id, throws: true })
    await this.productCategoriesRepository.remove(response)
    return this.productCategoriesRepository.getDeleteMessage()
  }
}

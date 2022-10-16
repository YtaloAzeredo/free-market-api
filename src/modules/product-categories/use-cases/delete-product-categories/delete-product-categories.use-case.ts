import NotFoundError from '@errors/not-found.error'
import { IUseCase } from '@interfaces/use-case.interface'
import { IProductCategoriesRepository } from '@modules/product-categories/repositories/product-categories-repository.interface'

export class DeleteProductCategoriesUseCase implements IUseCase {
  constructor (
    private readonly productCategoriesRepository: IProductCategoriesRepository
  ) {}

  async execute (id: number): Promise<string> {
    const foundCategory = await this.productCategoriesRepository.getOne({ id })
    if (!foundCategory) throw new NotFoundError(this.productCategoriesRepository.getNotFoundMessage())
    await this.productCategoriesRepository.remove(foundCategory)
    return this.productCategoriesRepository.getDeleteMessage()
  }
}

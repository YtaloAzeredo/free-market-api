import NotFoundError from '@errors/not-found.error'
import { IUseCase } from '@interfaces/use-case.interface'
import { ProductCategories } from '@modules/product-categories/models/type-orm/product-categories.model'
import { IProductCategoriesRepository } from '@modules/product-categories/repositories/product-categories-repository.interface'

export class GetAllProductCategoriesUseCase implements IUseCase {
  constructor (
    private readonly productCategoriesRepository: IProductCategoriesRepository
  ) {}

  async execute (): Promise<ProductCategories[]> {
    const foundCategories = await this.productCategoriesRepository.getAll()
    if (!foundCategories.length) throw new NotFoundError(this.productCategoriesRepository.getNotFoundMessage())
    return foundCategories
  }
}

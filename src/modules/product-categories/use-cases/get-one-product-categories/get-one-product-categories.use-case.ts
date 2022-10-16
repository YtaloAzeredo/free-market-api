import NotFoundError from '@errors/not-found.error'
import { IUseCase } from '@interfaces/use-case.interface'
import { ProductCategories } from '@modules/product-categories/models/type-orm/product-categories.model'
import { IProductCategoriesRepository } from '@modules/product-categories/repositories/product-categories-repository.interface'

export class GetOneProductCategoriesUseCase implements IUseCase {
  constructor (
    private readonly productCategoriesRepository: IProductCategoriesRepository
  ) {}

  async execute (id: number): Promise<ProductCategories> {
    const foundProductCategory = await this.productCategoriesRepository.getOne({ id })
    if (!foundProductCategory) throw new NotFoundError(this.productCategoriesRepository.getNotFoundMessage())
    return foundProductCategory
  }
}

import NotFoundError from '@errors/not-found.error'
import { IUseCase } from '@interfaces/use-case.interface'
import { ProductCategories } from '@modules/product-categories/models/type-orm/product-categories.model'
import { IProductCategoriesRepository } from '@modules/product-categories/repositories/product-categories-repository.interface'

export class UpdateProductCategoriesUseCase implements IUseCase {
  constructor (
    private readonly productCategoriesRepository: IProductCategoriesRepository
  ) {}

  async execute (productCategoriesData: ProductCategories): Promise<ProductCategories> {
    const response = await this.productCategoriesRepository.getOne({ id: productCategoriesData.id })
    if (!response) throw new NotFoundError(this.productCategoriesRepository.getNotFoundMessage())
    response.description = productCategoriesData.description
    return this.productCategoriesRepository.save(response)
  }
}

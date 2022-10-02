import ConflictError from '@errors/conflict.error'
import { IUseCase } from '@interfaces/use-case.interface'
import { ProductCategories } from '@modules/product-categories/models/type-orm/product-categories.model'
import { IProductCategoriesRepository } from '@modules/product-categories/repositories/product-categories-repository.interface'

export class CreateProductCategoriesUseCase implements IUseCase {
  constructor (
    private readonly productCategoriesRepository: IProductCategoriesRepository
  ) {}

  async execute (productCategoryData: ProductCategories): Promise<ProductCategories> {
    const categoryExist = await this.productCategoriesRepository.getOne({ code: productCategoryData.code })
    if (categoryExist) throw new ConflictError(this.productCategoriesRepository.getConflictError())
    return this.productCategoriesRepository.store(productCategoryData)
  }
}

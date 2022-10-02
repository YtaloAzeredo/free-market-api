import { IUseCase } from '@interfaces/use-case.interface'
import { IProductCategoriesRepository } from '@modules/product-categories/repositories/product-categories-repository.interface'
import { Products } from '@modules/products/models/type-orm/products.model'
import { IProductsRepository } from '@modules/products/repositories/products-repository.interface'

export class CreateProductsUseCase implements IUseCase {
  constructor (
    private readonly productsRepository: IProductsRepository,
    private readonly productCategoriesRepository: IProductCategoriesRepository
  ) {}

  async execute (productsData: Products): Promise<Products> {
    await this.productCategoriesRepository.getOne({ id: productsData.category, throws: true })
    return this.productsRepository.store(productsData)
  }
}

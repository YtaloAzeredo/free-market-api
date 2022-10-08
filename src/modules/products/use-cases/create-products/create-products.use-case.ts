import NotFoundError from '@errors/not-found.error'
import { IUseCase } from '@interfaces/use-case.interface'
import { IProductCategoriesRepository } from '@modules/product-categories/repositories/product-categories-repository.interface'
import { ProductsModel } from '@modules/products/models/products.model'
import { IProductsRepository } from '@modules/products/repositories/products-repository.interface'

export class CreateProductsUseCase implements IUseCase {
  constructor (
    private readonly productsRepository: IProductsRepository,
    private readonly productCategoriesRepository: IProductCategoriesRepository
  ) {}

  async execute (productsData: ProductsModel): Promise<ProductsModel> {
    const foundProductCategory = await this.productCategoriesRepository.getOne({ id: productsData.category })
    if (!foundProductCategory) throw new NotFoundError('Product category not found')
    return this.productsRepository.store(productsData)
  }
}

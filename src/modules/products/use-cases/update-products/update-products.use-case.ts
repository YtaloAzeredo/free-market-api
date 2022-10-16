import NotFoundError from '@errors/not-found.error'
import { IUseCase } from '@interfaces/use-case.interface'
import { IProductCategoriesRepository } from '@modules/product-categories/repositories/product-categories-repository.interface'
import { ProductsModel } from '@modules/products/models/products.model'
import { IProductsRepository } from '@modules/products/repositories/products-repository.interface'

export class UpdateProductsUseCase implements IUseCase {
  constructor (
    private readonly productsRepository: IProductsRepository,
    private readonly productCategoriesRepository: IProductCategoriesRepository
  ) {}

  async execute (productsData: ProductsModel): Promise<ProductsModel> {
    const foundProduct = await this.productsRepository.getOne({ id: productsData.id })
    if (!foundProduct) throw new NotFoundError(this.productsRepository.getNotFoundMessage())
    foundProduct.description = productsData.description
    foundProduct.price = productsData.price
    foundProduct.quantity = productsData.quantity
    if (productsData.category) {
      const foundCategory = await this.productCategoriesRepository.getOne({ id: productsData.category })
      if (!foundCategory) throw new NotFoundError(this.productCategoriesRepository.getNotFoundMessage())
      foundProduct.category = productsData.category
    }
    return this.productsRepository.save(foundProduct)
  }
}

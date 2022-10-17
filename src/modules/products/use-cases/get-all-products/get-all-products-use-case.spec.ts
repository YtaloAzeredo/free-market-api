import { ProductsModel } from '@modules/products/models/products-model.interface'
import { GetAllProductsUseCase } from './get-all-products.use-case'
const zero = 0
const productProps = [
  'description',
  'price',
  'quantity'
]
const errorMessage = 'Nenhum produto encontrado'
let productsRepository: any, getAllProductsUseCase: GetAllProductsUseCase
describe('GetAllProductsUseCase', () => {
  beforeEach(() => makeSut())
  describe('Quando requisitar uma lista de produtos', () => {
    test('Deve retornar os dados dos produtos encontrados', async () => {
      const repositorySpy = jest.spyOn(productsRepository, 'getAll')

      const response = await getAllProductsUseCase.execute()

      expect(repositorySpy).toHaveBeenCalled()
      expect(response.length).toBeGreaterThan(zero)
      response.map(result => {
        productProps.map(prop => {
          expect(result).toHaveProperty(prop)
        })
      })
    })
  })

  describe('Quando requisitar uma lista de produtos e não encontrar nenhum registro', () => {
    test('Deve lançar uma exceção', async () => {
      jest.spyOn(productsRepository, 'getAll').mockReturnValue([])

      const response = getAllProductsUseCase.execute()

      await expect(response)
        .rejects
        .toThrow(errorMessage)
    })
  })
})

const makeSut = () => {
  productsRepository = makeRepository()
  getAllProductsUseCase = new GetAllProductsUseCase(productsRepository)
}

const makeRepository = () => {
  class ProductsRepositoryStub {
    async getAll (): Promise<ProductsModel[]> {
      return [
        {
          description: 'sut',
          price: 1,
          quantity: 1
        }
      ]
    }
  }
  return new ProductsRepositoryStub()
}

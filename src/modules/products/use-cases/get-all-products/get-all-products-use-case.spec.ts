import { ProductsModel } from '@modules/products/models/products.model'
import { GetAllProductsUseCase } from './get-all-products.use-case'
const ZERO = 0
const PRODUCTS_PROPS = [
  'description',
  'price',
  'quantity'
]
const ERROR_MESSAGE = 'Nenhum produto encontrado'
let productsRepository: any, getAllProductsUseCase: GetAllProductsUseCase
describe('GetAllProductsUseCase', () => {
  beforeEach(() => makeSut())
  describe('Quando requisitar uma lista de produtos', () => {
    test('Deve retornar os dados dos produtos encontrados', async () => {
      const repositorySpy = jest.spyOn(productsRepository, 'getAll')

      const response = await getAllProductsUseCase.execute()

      expect(repositorySpy).toHaveBeenCalled()
      expect(response.length).toBeGreaterThan(ZERO)
      response.map(result => {
        PRODUCTS_PROPS.map(prop => {
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
        .toThrow(ERROR_MESSAGE)
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

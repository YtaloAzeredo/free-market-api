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
    test('O caso de uso deve ser instanciado corretamente', async () => {
      expect(getAllProductsUseCase).toBeInstanceOf(GetAllProductsUseCase)
    })
  })

  describe('Quando requisitar consultar o caso de uso de busca de produtos', () => {
    test('O método getAll() do repositório deve ser chamado corretamente', async () => {
      const repositorySpy = jest.spyOn(productsRepository, 'getAll')

      await getAllProductsUseCase.execute()

      expect(repositorySpy).toHaveBeenCalled()
    })
  })

  describe('Quando requisitar corretamente uma lista de produtos', () => {
    test('Deve retornar os dados dos produtos encontrados', async () => {
      const response = await getAllProductsUseCase.execute()

      expect(response.length).toBeGreaterThan(zero)
    })
  })

  describe('Quando requisitar uma lista de produtos e retornar dados', () => {
    test('Todas as propriedades dos dados devem ser correspondentes às propriedades de produto', async () => {
      const response = await getAllProductsUseCase.execute()

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
          id: 1,
          description: 'sut',
          price: 1,
          quantity: 1,
          category: {
            id: 1,
            code: 'eletronics',
            description: 'Produtos Eletrônicos'
          }
        }
      ]
    }

    getNotFoundMessage (): string {
      return 'Nenhum produto encontrado'
    }
  }
  return new ProductsRepositoryStub()
}

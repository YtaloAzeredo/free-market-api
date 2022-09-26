import { ProductsRepository } from '@modules/products/repositories/in-memory/products.repository';
import { GetAllProductsUseCase } from './get-all-products.use-case';
const ZERO = 0
const PRODUCTS_PROPS = [
  'description',
  'price',
  'quantity'
]
const ERROR_MESSAGE = 'Nenhum produto encontrado'

describe('GetAllProductsUseCase', () => {
  let productsRepository: ProductsRepository, getAllProductsUseCase: GetAllProductsUseCase;
  beforeEach(() => {
    productsRepository = new ProductsRepository()
    getAllProductsUseCase = new GetAllProductsUseCase(productsRepository)
  })
  describe('Quando requisitar uma lista de produtos', () => {
    test('Deve retornar os dados dos produtos encontrados', async () => {
      productsRepository.factory()

      const response = await getAllProductsUseCase.execute()

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
      const response = getAllProductsUseCase.execute()
      
      await expect(response)
      .rejects
      .toThrow(ERROR_MESSAGE)
    })
  })

  describe('Quando requisitar uma lista de produtos', () => {
    test('Deve os dados retornados devem ser do tipo \'Products\'', async () => {
      productsRepository.factory()

      const response = await getAllProductsUseCase.execute()

      expect(response.length).toBeGreaterThan(ZERO)
      response.map(result => {
        PRODUCTS_PROPS.map(prop => {
          expect(result).toHaveProperty(prop)
        })
      })
    })
  })
})

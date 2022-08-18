import { ProductCategories } from '@models/product-categories.model'
import { Request, Response } from 'express'
import ConflictError from '@errors/conflict.error'
import ProductCategoriesRepository from '@repositories/product-categories.repository'

class ProductCategoriesController {
  async getAll (req: Request, res: Response): Promise<Response> {
    const response = await ProductCategoriesRepository.getAll({ throws: true })
    return res.json({ response })
  }

  async get (req: Request, res: Response): Promise<Response> {
    const response = await ProductCategoriesRepository.getOneBy({ id: +req.params.id, throws: true })
    return res.json({ response })
  }

  async store (req: Request, res: Response): Promise<Response> {
    const productCategoryData: ProductCategories = req.body
    const userExist = await ProductCategoriesRepository.getOneBy({ code: productCategoryData.code })
    if (userExist) throw new ConflictError(ProductCategoriesRepository.getConflictError())
    const response = await ProductCategoriesRepository.store(productCategoryData)
    return res.json({ response })
  }

  async delete (req: Request, res: Response): Promise<Response> {
    const response = await ProductCategoriesRepository.getOneBy({ id: +req.params.id, throws: true })
    await ProductCategoriesRepository.remove(response)
    return res.json({ message: ProductCategoriesRepository.getDeleteMessage() })
  }

  async update (req: Request, res: Response): Promise<Response> {
    const response = await ProductCategoriesRepository.getOneBy({ id: +req.params.id, throws: true })
    const userData: ProductCategories = req.body
    response.description = userData.description
    await ProductCategoriesRepository.save(response)
    return res.json({ response })
  }
};

export default new ProductCategoriesController()

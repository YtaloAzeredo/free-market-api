import { Request, Response } from 'express'
import { IController } from '@interfaces/controller.interface'
import { IUseCase } from '@interfaces/use-case.interface'

export class UpdateProductCategoriesController implements IController {
  constructor (private readonly updateProductCategoriesUseCase: IUseCase) { }

  async handle (req: Request, res: Response): Promise<Response> {
    const response = await this.updateProductCategoriesUseCase.execute({
      id: +req.params.id,
      ...req.body
    })
    return res.json({ response })
  }
}

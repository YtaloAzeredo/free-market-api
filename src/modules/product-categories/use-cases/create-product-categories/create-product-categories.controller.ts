import { Request, Response } from 'express'
import { IController } from '@interfaces/controller.interface'
import { IUseCase } from '@interfaces/use-case.interface'

export class CreateProductCategoriesController implements IController {
  constructor (private readonly createProductCategoriesUseCase: IUseCase) { }

  async handle (req: Request, res: Response): Promise<Response> {
    const response = await this.createProductCategoriesUseCase.execute(req.body)
    return res.json({ response })
  }
}

import { Request, Response } from 'express'
import { IController } from '@interfaces/controller.interface'
import { IUseCase } from '@interfaces/use-case.interface'

export class DeleteProductCategoriesController implements IController {
  constructor (private readonly deleteProductCategoriesUseCase: IUseCase) { }

  async handle (req: Request, res: Response): Promise<Response> {
    const response = await this.deleteProductCategoriesUseCase.execute(+req.params.id)
    return res.json({ response })
  }
}

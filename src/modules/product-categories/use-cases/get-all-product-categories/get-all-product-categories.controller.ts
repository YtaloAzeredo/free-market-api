import { Request, Response } from 'express'
import { IController } from '@interfaces/controller.interface'
import { IUseCase } from '@interfaces/use-case.interface'

export class GetAllProductCategoriesController implements IController {
  constructor (private readonly getAllProductCategoriesUseCase: IUseCase) { }

  async handle (req: Request, res: Response): Promise<Response> {
    const response = await this.getAllProductCategoriesUseCase.execute()
    return res.json({ response })
  }
}

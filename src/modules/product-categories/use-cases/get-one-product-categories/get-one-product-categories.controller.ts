import { Request, Response } from 'express'
import { IController } from '@interfaces/controller.interface'
import { IUseCase } from '@interfaces/use-case.interface'

export class GetOneProductCategoriesController implements IController {
  constructor (private readonly getOneProductCategoriesUseCase: IUseCase) { }

  async handle (req: Request, res: Response): Promise<Response> {
    const response = await this.getOneProductCategoriesUseCase.execute(+req.params.id)
    return res.json({ response })
  }
}

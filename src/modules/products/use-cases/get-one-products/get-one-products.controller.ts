import { Request, Response } from 'express'
import { IController } from '@interfaces/controller.interface'
import { IUseCase } from '@interfaces/use-case.interface'

export class GetOneProductsController implements IController {
  constructor (private readonly getOneProductsUseCase: IUseCase) { }

  async handle (req: Request, res: Response): Promise<Response> {
    const response = await this.getOneProductsUseCase.execute(+req.params.id)
    return res.json({ response })
  }
}

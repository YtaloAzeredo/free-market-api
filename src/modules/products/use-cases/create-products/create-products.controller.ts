import { Request, Response } from 'express'
import { IController } from '@interfaces/controller.interface'
import { IUseCase } from '@interfaces/use-case.interface'

export class CreateProductsController implements IController {
  constructor (private readonly createProductsUseCase: IUseCase) { }

  async handle (req: Request, res: Response): Promise<Response> {
    const response = await this.createProductsUseCase.execute(req.body)
    return res.json({ response })
  }
}

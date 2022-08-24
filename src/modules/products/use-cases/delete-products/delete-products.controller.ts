import { Request, Response } from 'express'
import { IController } from '@interfaces/controller.interface'
import { IUseCase } from '@interfaces/use-case.interface'

export class DeleteProductsController implements IController {
  constructor (private readonly deleteProductsUseCase: IUseCase) { }

  async handle (req: Request, res: Response): Promise<Response> {
    const response = await this.deleteProductsUseCase.execute(+req.params.id)
    return res.json({ response })
  }
}

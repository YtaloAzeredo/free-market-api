import { Request, Response } from 'express'
import { IController } from '@interfaces/controller.interface'
import { IUseCase } from '@interfaces/use-case.interface'

export class GetAllProductsController implements IController {
  constructor (private readonly getAllProductsUseCase: IUseCase) { }

  async handle (req: Request, res: Response): Promise<Response> {
    const response = await this.getAllProductsUseCase.execute()
    return res.json({ response })
  }
}

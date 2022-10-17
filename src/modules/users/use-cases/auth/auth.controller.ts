import { Request, Response } from 'express'
import { IController } from '@interfaces/controller.interface'
import { IUseCase } from '@interfaces/use-case.interface'

export class AuthController implements IController {
  constructor (private readonly authUseCase: IUseCase) { }

  async handle (req: Request, res: Response): Promise<Response> {
    const response = await this.authUseCase.execute(req.body)
    return res.json({ response })
  }
}

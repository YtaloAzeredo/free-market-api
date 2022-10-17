import { Request, Response } from 'express'
import { IController } from '@interfaces/controller.interface'
import { IUseCase } from '@interfaces/use-case.interface'

export class SignInController implements IController {
  constructor (private readonly signInUseCase: IUseCase) { }

  async handle (req: Request, res: Response): Promise<Response> {
    const response = await this.signInUseCase.execute(req.body)
    return res.json({ response })
  }
}

import { Users } from '@models/users.model'
import { Request, Response } from 'express'
import ConflictError from '@errors/conflict.error'
import UserRepository from '@repositories/users.repository'

class UsersController {
  async getAll (req: Request, res: Response): Promise<Response> {
    const response = await UserRepository.getAll({ throws: true })
    return res.json({ response })
  }

  async get (req: Request, res: Response): Promise<Response> {
    const response = await UserRepository.getOneBy({ id: +req.params.id, throws: true })
    return res.json({ response })
  }

  async store (req: Request, res: Response): Promise<Response> {
    const userData: Users = req.body
    const userExist = await UserRepository.getOneBy({ email: userData.email })
    if (userExist) throw new ConflictError(UserRepository.getConflictError())
    const response = await UserRepository.store(userData)
    return res.json({ response })
  }

  async delete (req: Request, res: Response): Promise<Response> {
    const response = await UserRepository.getOneBy({ id: +req.params.id, throws: true })
    await UserRepository.remove(response)
    return res.json({ message: UserRepository.getDeleteMessage() })
  }

  async update (req: Request, res: Response): Promise<Response> {
    const response = await UserRepository.getOneBy({ id: +req.params.id, throws: true })
    const userData: Users = req.body
    response.name = userData.name
    response.email = userData.email
    response.password = userData.password
    await UserRepository.save(response)
    return res.json({ response })
  }
};

export default new UsersController()

import { Users } from '@models/Users'
import { Request, Response, NextFunction } from 'express'
import ConflictError from '@errors/ConflictError'
import UserRepository from '@repositories/UserRepository'

class UsersController {
  async getAll (req: Request, res: Response, next: NextFunction): Promise<Response> {
    const users = await UserRepository.getAll({ throws: true })
    return res.json({ response: users })
  }

  async get (req: Request, res: Response, next: NextFunction): Promise<Response> {
    const user = await UserRepository.getOneBy({ id: +req.params.id, throws: true })
    return res.json({ response: user })
  }

  async store (req: Request, res: Response, next: NextFunction): Promise<Response> {
    const userData: Users = req.body
    const userExist = await UserRepository.getOneBy({ email: userData.email })
    if (userExist) throw new ConflictError(UserRepository.getConflictError())
    const createdUser = await UserRepository.store(userData)
    return res.json({ response: createdUser })
  }

  async delete (req: Request, res: Response, next: NextFunction): Promise<Response> {
    const user = await UserRepository.getOneBy({ id: +req.params.id, throws: true })
    await UserRepository.remove(user)
    return res.json({ message: UserRepository.getDeleteMessage() })
  }

  async update (req: Request, res: Response, next: NextFunction): Promise<Response> {
    const user = await UserRepository.getOneBy({ id: +req.params.id, throws: true })
    const userData: Users = req.body
    user.name = userData.name
    user.email = userData.email
    user.password = userData.password
    await UserRepository.save(user)
    return res.json({ response: user })
  }
};

export default new UsersController()

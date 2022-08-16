import { Users } from '@models/Users'
import { Request, Response, NextFunction } from 'express'
import ConflictError from '@errors/ConflictError'
import UserRepository from '@repositories/UserRepository'

class UsersController {
  async getAll (req: Request, res: Response, next: NextFunction): Promise<Response | undefined> {
    try {
      const users = await UserRepository.getAll({ throws: true })
      return res.json(users)
    } catch (err) {
      next(err)
    }
  }

  async get (req: Request, res: Response, next: NextFunction): Promise<Response | undefined> {
    try {
      const user = await UserRepository.getOneBy({ id: +req.params.id, throws: true })
      return res.json(user)
    } catch (err) {
      next(err)
    }
  }

  async store (req: Request, res: Response, next: NextFunction): Promise<Response | undefined> {
    try {
      const userData: Users = req.body
      const userExist = await UserRepository.getOneBy({ email: userData.email })
      if (userExist) throw new ConflictError(UserRepository.getConflictError())
      const createdUser = await UserRepository.store(userData)
      return res.json(createdUser)
    } catch (err) {
      next(err)
    }
  }

  async delete (req: Request, res: Response, next: NextFunction): Promise<Response | undefined> {
    try {
      const user = await UserRepository.getOneBy({ id: +req.params.id, throws: true })
      await UserRepository.remove(user)
      return res.json(UserRepository.getDeleteMessage())
    } catch (err) {
      next(err)
    }
  }

  async update (req: Request, res: Response, next: NextFunction): Promise<Response | undefined> {
    try {
      const user = await UserRepository.getOneBy({ id: +req.params.id, throws: true })
      const userData: Users = req.body
      user.name = userData.name
      user.email = userData.email
      user.password = userData.password
      await UserRepository.save(user)
      return res.json(UserRepository.getUpdateMessage())
    } catch (err) {
      next(err)
    }
  }
};

export default new UsersController()

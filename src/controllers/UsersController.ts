import { Users } from '@models/Users'
import { Request, Response } from 'express'

class UsersController {
  async create (req: Request, res: Response) {
    const userData: Users = req.body
    const userExist = await Users.findOneBy({ email: userData.email })
    if (userExist) {
      return res.status(409).json({ error: 'User email already exist' })
    }
    const createdUser = Users.create(userData)
    await createdUser.save()
    return res.json(createdUser)
  }
};

export default new UsersController()

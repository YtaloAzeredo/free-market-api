import { Users } from '@models/Users'
import NotFoundError from '@errors/NotFoundError'
import { Abstract } from './Abstract'

class UserRepository extends Abstract {
  constructor () {
    super('User')
  }

  async getAll ({ throws }: { throws?: boolean } = {}): Promise<Users[]> {
    const users = await Users.find()
    if (!users.length && throws) throw new NotFoundError(this.getNotFoundError())
    return users
  }

  async getOneBy ({ id, email, throws }: { id?: number, email?: string, throws?: boolean }): Promise<Users> {
    const user = await Users.findOneBy({ id, email }) as Users
    if (!user && throws) throw new NotFoundError(this.getNotFoundError())
    return user
  }

  add (dataValues: Users): any {
    return Users.create(dataValues)
  }

  async store (dataValues: Users): Promise<Users> {
    const user = Users.create(dataValues)
    return user.save()
  }

  async save (user: Users): Promise<Users> {
    return user.save()
  }

  async remove (user: Users): Promise<Users> {
    return user.remove()
  }
}

export default new UserRepository()

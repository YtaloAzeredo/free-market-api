import { Users } from '@models/users.model'
import NotFoundError from '@errors/not-found.error'
import { Abstract } from './abstract.repository'

class UserRepository extends Abstract {
  constructor () {
    super('User')
  }

  async getAll ({ throws }: { throws?: boolean } = {}): Promise<Users[]> {
    const response = await Users.find()
    if (!response.length && throws) throw new NotFoundError(this.getNotFoundError())
    return response
  }

  async getOneBy ({ id, email, throws }: { id?: number, email?: string, throws?: boolean }): Promise<Users> {
    const response = await Users.findOneBy({ id, email }) as Users
    if (!response && throws) throw new NotFoundError(this.getNotFoundError())
    return response
  }

  add (dataValues: Users): Users {
    return Users.create(dataValues)
  }

  async store (dataValues: Users): Promise<Users> {
    const response = Users.create(dataValues)
    return response.save()
  }

  async save (request: Users): Promise<Users> {
    return request.save()
  }

  async remove (request: Users): Promise<Users> {
    return request.remove()
  }
}

export default new UserRepository()

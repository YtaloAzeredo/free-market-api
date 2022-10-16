import { Users } from '@modules/users/models/type-orm/users.model'
import { Abstract } from '@repositories/abstract.repository'
import { IUsersRepository } from '../users-repository.interface'

export class UserRepository extends Abstract implements IUsersRepository {
  constructor () {
    super('User')
  }

  async getAll (): Promise<Users[]> {
    return Users.find()
  }

  async getOne ({ id, email }: { id?: number, email?: string }): Promise<Users> {
    const response = await Users.findOneBy({ id, email }) as Users
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

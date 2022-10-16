import { Users } from '@modules/users/models/type-orm/users.model'
import { IUseCase } from '@interfaces/use-case.interface'
import { IUsersRepository } from '@modules/users/repositories/users-repository.interface'
import NotFoundError from '@errors/not-found.error'

export class GetOneUsersUseCase implements IUseCase {
  constructor (private readonly usersRepository: IUsersRepository) {}

  async execute (id: number): Promise<Users> {
    const foundUser = await this.usersRepository.getOne({ id })
    if (!foundUser) throw new NotFoundError(this.usersRepository.getNotFoundMessage())
    return foundUser
  }
}

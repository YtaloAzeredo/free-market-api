import { Users } from '@modules/users/models/type-orm/users.model'
import { IUseCase } from '@interfaces/use-case.interface'
import { IUsersRepository } from '@modules/users/repositories/users-repository.interface'
import NotFoundError from '@errors/not-found.error'

export class GetAllUsersUseCase implements IUseCase {
  constructor (private readonly usersRepository: IUsersRepository) {}

  async execute (): Promise<Users[]> {
    const foundUsers = await this.usersRepository.getAll()
    if (!foundUsers.length) throw new NotFoundError(this.usersRepository.getNotFoundMessage())
    return foundUsers
  }
}

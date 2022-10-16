import { Users } from '@modules/users/models/type-orm/users.model'
import ConflictError from '@errors/conflict.error'
import { IUseCase } from '@interfaces/use-case.interface'
import { IUsersRepository } from '@modules/users/repositories/users-repository.interface'
import NotFoundError from '@errors/not-found.error'

export class UpdateUsersUseCase implements IUseCase {
  constructor (private readonly usersRepository: IUsersRepository) {}

  async execute (userData: Users): Promise<Users> {
    const foundUser = await this.usersRepository.getOne({ id: userData.id })
    if (!foundUser) throw new NotFoundError(this.usersRepository.getNotFoundMessage())
    foundUser.name = userData.name
    foundUser.password = userData.password
    if (userData.email) {
      const userExist = await this.usersRepository.getOne({ email: userData.email })
      if (userExist) throw new ConflictError(this.usersRepository.getConflictMessage())
      foundUser.email = userData.email
    }
    return this.usersRepository.save(foundUser)
  }
}

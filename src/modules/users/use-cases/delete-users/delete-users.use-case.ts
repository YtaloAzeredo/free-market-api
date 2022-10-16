import NotFoundError from '@errors/not-found.error'
import { IUseCase } from '@interfaces/use-case.interface'
import { IUsersRepository } from '@modules/users/repositories/users-repository.interface'

export class DeleteUsersUseCase implements IUseCase {
  constructor (private readonly usersRepository: IUsersRepository) {}

  async execute (id: number): Promise<string> {
    const foundUser = await this.usersRepository.getOne({ id })
    if (!foundUser) throw new NotFoundError(this.usersRepository.getNotFoundMessage())
    await this.usersRepository.remove(foundUser)
    return this.usersRepository.getDeleteMessage()
  }
}

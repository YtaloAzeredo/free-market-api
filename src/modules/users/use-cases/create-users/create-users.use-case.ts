import { Users } from '@modules/users/models/type-orm/users.model'
import ConflictError from '@errors/conflict.error'
import { IUseCase } from '@interfaces/use-case.interface'
import { IUsersRepository } from '@modules/users/repositories/users-repository.interface'
import { IEncrypt } from '@modules/encrypt/services/encrypt.interface'

export class CreateUsersUseCase implements IUseCase {
  constructor (
    private readonly usersRepository: IUsersRepository,
    private readonly encryptService: IEncrypt
  ) {}

  async execute (userData: Users): Promise<Users> {
    const userExist = await this.usersRepository.getOne({ email: userData.email })
    if (userExist) throw new ConflictError(this.usersRepository.getConflictMessage())
    userData.password = await this.encryptService.encrypt(userData.password)
    return this.usersRepository.store(userData)
  }
}

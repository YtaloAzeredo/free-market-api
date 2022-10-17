import { EncryptService } from '@modules/encrypt/services/bcrypt/encrypt.service'
import { UserRepository } from '../../repositories/type-orm/users.repository'
import { CreateUsersController } from './create-users.controller'
import { CreateUsersUseCase } from './create-users.use-case'

const encryptService = new EncryptService()
const usersRepository = new UserRepository()
const createUsersUseCase = new CreateUsersUseCase(usersRepository, encryptService)
export const createUsersController = new CreateUsersController(createUsersUseCase)

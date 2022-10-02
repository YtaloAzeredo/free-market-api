import { UserRepository } from '../../repositories/type-orm/users.repository'
import { GetOneUsersController } from './get-one-users.controller'
import { GetOneUsersUseCase } from './get-one-users.use-case'

const usersRepository = new UserRepository()
const getOneUsersUseCase = new GetOneUsersUseCase(usersRepository)
export const getOneUsersController = new GetOneUsersController(getOneUsersUseCase)

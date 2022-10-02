import { UserRepository } from '../../repositories/type-orm/users.repository'
import { DeleteUsersController } from './delete-users.controller'
import { DeleteUsersUseCase } from './delete-users.use-case'

const usersRepository = new UserRepository()
const deleteUsersUseCase = new DeleteUsersUseCase(usersRepository)
export const deleteUsersController = new DeleteUsersController(deleteUsersUseCase)

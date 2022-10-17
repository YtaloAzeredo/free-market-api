import { AuthController } from './auth.controller'
import { AuthUseCase } from './auth.use-case'
import { UserRepository } from '../../repositories/type-orm/users.repository'
import jwt from 'jsonwebtoken'

const userRepository = new UserRepository()
const authUseCase = new AuthUseCase(userRepository, jwt)
export const authController = new AuthController(authUseCase)

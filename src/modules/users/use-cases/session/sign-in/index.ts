import { SignInController } from './sign-in.controller'
import { SignInUseCase } from './sign-in.use-case'
import { UserRepository } from '../../../repositories/type-orm/users.repository'
import { EncryptService } from '@modules/encrypt/services/bcrypt/encrypt.service'
import { AuthService } from '@modules/auth/services/jwt/auth.service'

const userRepository = new UserRepository()
const authService = new AuthService()
const encryptService = new EncryptService()
const signInUseCase = new SignInUseCase(userRepository, authService, encryptService)
export const signInController = new SignInController(signInUseCase)

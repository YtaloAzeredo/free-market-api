import NotFoundError from '@errors/not-found.error'
import { IUseCase } from '@interfaces/use-case.interface'
import { IAuth } from '@modules/auth/services/auth.interface'
import { IEncrypt } from '@modules/encrypt/services/encrypt.interface'
import { IUsersRepository } from '@modules/users/repositories/users-repository.interface'
import moment from 'moment'

const defaultError = 'Incorrect email or password'
const dateFormat = 'YYYY-MM-DD hh:mm:ss'
const expirationTime = process.env.APP_SECRET_EXPIRATION_TIME

export class SignInUseCase implements IUseCase {
  constructor (
    private readonly usersRepository: IUsersRepository,
    private readonly authService: IAuth,
    private readonly encryptService: IEncrypt
  ) {}

  async execute (userData: { email: string, password: string }): Promise<any> {
    const foundUser = await this.usersRepository.getOne({ email: userData.email })
    if (!foundUser) throw new NotFoundError(defaultError)
    const passwordMatch = await this.encryptService.compare(userData.password, foundUser.password)
    if (!passwordMatch) throw new NotFoundError(defaultError)
    const token = this.authService.createToken({ email: userData.email, password: userData.password })
    const now = new Date()
    const expires = moment(now).add(expirationTime, 'seconds').format(dateFormat)
    return {
      token,
      expires
    }
  }
}

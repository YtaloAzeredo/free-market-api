import NotFoundError from '@errors/not-found.error'
import { IUseCase } from '@interfaces/use-case.interface'
import { IUsersRepository } from '@modules/users/repositories/users-repository.interface'
import moment from 'moment'
const appSecret = process.env.APP_SECRET
const expirationTime = process.env.APP_SECRET_EXPIRATION_TIME
const defaultError = 'Incorrect email or password'
const dateFormat = 'YYYY-MM-DD hh:mm:ss'
const inSeconds = 's'

export class AuthUseCase implements IUseCase {
  constructor (
    private readonly usersRepository: IUsersRepository,
    private readonly authService: any
  ) {}

  async execute (userData: { email: string, password: string }): Promise<any> {
    const foundUser = await this.usersRepository.getOne({ email: userData.email })
    if (!foundUser) throw new NotFoundError(defaultError)
    if (userData.password !== foundUser.password) throw new NotFoundError(defaultError)
    const token = this.authService.sign(
      { email: userData.email, password: userData.password },
      appSecret,
      { expiresIn: expirationTime + inSeconds }
    )
    const now = new Date()
    const expires = moment(now).add(expirationTime, 'seconds').format(dateFormat)
    return {
      token,
      expires
    }
  }
}

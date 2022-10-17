import jwt from 'jsonwebtoken'
import { IAuth } from '../auth.interface'

const appSecret = process.env.APP_SECRET as string
const expirationTime = process.env.APP_SECRET_EXPIRATION_TIME as string
const inSeconds: string = 's'

export class AuthService implements IAuth {
  async createToken (data: any): Promise<string> {
    return jwt.sign(
      data,
      appSecret,
      { expiresIn: expirationTime + inSeconds }
    )
  }
}

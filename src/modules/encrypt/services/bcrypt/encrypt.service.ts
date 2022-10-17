import * as bcrypt from 'bcrypt'
import { IEncrypt } from '../encrypt.interface'

export class EncryptService implements IEncrypt {
  async encrypt (value: string): Promise<string> {
    const salt = await bcrypt.genSalt()
    const encryptedValue = await bcrypt.hash(value, salt)
    return encryptedValue
  }

  async compare (value: string, value2: string): Promise<boolean> {
    return bcrypt.compare(value, value2)
  }
}

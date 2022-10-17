export interface IEncrypt {
  encrypt(value: string): Promise<string>
  compare(value: string, value2: string): Promise<boolean>
}

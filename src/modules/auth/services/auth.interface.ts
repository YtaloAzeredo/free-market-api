export interface IAuth {
  createToken(data: any): Promise<string>
}

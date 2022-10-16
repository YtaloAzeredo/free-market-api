import { UsersModel } from '@modules/users/models/users.model'

export class AddressesModel {
  id!: number
  street!: string
  city!: string
  zipCode!: string
  user!: UsersModel
}

import { UsersModel } from '@modules/users/models/users-model.interface'

export interface AddressesModel {
  id: number
  street: string
  city: string
  zipCode: string
  user: UsersModel
}

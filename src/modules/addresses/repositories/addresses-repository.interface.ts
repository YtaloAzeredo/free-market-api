import { IRepository } from '@interfaces/repository.interface'
import { AddressesModel } from '../models/addresses-model.interface'

export interface IAddressesRepository extends IRepository {
  getAll(data?: any): Promise<AddressesModel[]>
  getOne(data: any): Promise<AddressesModel>
  add(data: any): AddressesModel
  store(data: any): Promise<AddressesModel>
  save(data: any): Promise<AddressesModel>
  remove(data: any): Promise<AddressesModel>
}

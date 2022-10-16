import { Addresses } from '@modules/addresses/models/type-orm/addresses.model'
import { Abstract } from '@repositories/abstract.repository'
import { IAddressesRepository } from '../addresses-repository.interface'
import { AddressesModel } from '@modules/addresses/models/addresses-model.interface'

export class AddressesRepository extends Abstract implements IAddressesRepository {
  constructor () {
    super('Address')
  }

  async getAll (): Promise<AddressesModel[]> {
    return Addresses.find()
  }

  async getOne ({ id }: { id: number }): Promise<AddressesModel> {
    const response = await Addresses.findOneBy({ id }) as AddressesModel
    return response
  }

  add (dataValues: Addresses): AddressesModel {
    return Addresses.create(dataValues)
  }

  async store (dataValues: Addresses): Promise<AddressesModel> {
    const response = Addresses.create(dataValues)
    return response.save()
  }

  async save (request: Addresses): Promise<AddressesModel> {
    return request.save()
  }

  async remove (request: Addresses): Promise<AddressesModel> {
    return request.remove()
  }
}

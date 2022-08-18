import { Addresses } from '@models/addresses.model'
import NotFoundError from '@errors/not-found.error'
import { Abstract } from './abstract.repository'

class AddressesRepository extends Abstract {
  constructor () {
    super('Address')
  }

  async getAll ({ throws }: { throws?: boolean } = {}): Promise<Addresses[]> {
    const response = await Addresses.find()
    if (!response.length && throws) throw new NotFoundError(this.getNotFoundError())
    return response
  }

  async getOneBy ({ id, throws }: { id?: number, throws?: boolean }): Promise<Addresses> {
    const response = await Addresses.findOneBy({ id }) as Addresses
    if (!response && throws) throw new NotFoundError(this.getNotFoundError())
    return response
  }

  add (dataValues: Addresses): Addresses {
    return Addresses.create(dataValues)
  }

  async store (dataValues: Addresses): Promise<Addresses> {
    const response = Addresses.create(dataValues)
    return response.save()
  }

  async save (request: Addresses): Promise<Addresses> {
    return request.save()
  }

  async remove (request: Addresses): Promise<Addresses> {
    return request.remove()
  }
}

export default new AddressesRepository()

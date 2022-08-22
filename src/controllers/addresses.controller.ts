import { Addresses } from '@modules/addresses/models/addresses.model'
import { Request, Response } from 'express'
import AddressesRepository from '@modules/addresses/repositories/addresses.repository'
import UsersRepository from 'src/modules/users/repositories/users.repository'

class AddressesController {
  async getAll (req: Request, res: Response): Promise<Response> {
    const response = await AddressesRepository.getAll({ throws: true })
    return res.json({ response })
  }

  async get (req: Request, res: Response): Promise<Response> {
    const response = await AddressesRepository.getOneBy({ id: +req.params.id, throws: true })
    return res.json({ response })
  }

  async store (req: Request, res: Response): Promise<Response> {
    const addressData: Addresses = req.body
    await UsersRepository.getOneBy({ id: +req.body.user, throws: true })
    const response = await AddressesRepository.store(addressData)
    return res.json({ response })
  }

  async delete (req: Request, res: Response): Promise<Response> {
    const response = await AddressesRepository.getOneBy({ id: +req.params.id, throws: true })
    await AddressesRepository.remove(response)
    return res.json({ message: AddressesRepository.getDeleteMessage() })
  }

  async update (req: Request, res: Response): Promise<Response> {
    const response = await AddressesRepository.getOneBy({ id: +req.params.id, throws: true })
    const addressData: Addresses = req.body
    response.street = addressData.street
    response.city = addressData.city
    response.zipCode = addressData.zipCode
    await AddressesRepository.save(response)
    return res.json({ response })
  }
};

export default new AddressesController()

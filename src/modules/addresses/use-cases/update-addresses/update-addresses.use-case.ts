import { IUseCase } from '@interfaces/use-case.interface'
import { IAddressesRepository } from '@modules/addresses/repositories/addresses-repository.interface'
import { AddressesModel } from '@modules/addresses/models/addresses.model'
import NotFoundError from '@errors/not-found.error'

export class UpdateAddressesUseCase implements IUseCase {
  constructor (
    private readonly addressesRepository: IAddressesRepository
  ) {}

  async execute (addressesData: AddressesModel): Promise<AddressesModel> {
    const foundAddress = await this.addressesRepository.getOne({ id: addressesData.id })
    if (!foundAddress) throw new NotFoundError('Address not found')
    foundAddress.street = addressesData.street
    foundAddress.city = addressesData.city
    foundAddress.zipCode = addressesData.zipCode
    return this.addressesRepository.save(foundAddress)
  }
}

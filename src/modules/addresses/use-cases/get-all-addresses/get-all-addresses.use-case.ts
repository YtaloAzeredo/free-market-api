import { IUseCase } from '@interfaces/use-case.interface'
import { IAddressesRepository } from '@modules/addresses/repositories/addresses-repository.interface'
import NotFoundError from '@errors/not-found.error'
import { AddressesModel } from '@modules/addresses/models/addresses.model'

export class GetAllAddressesUseCase implements IUseCase {
  constructor (
    private readonly addressesRepository: IAddressesRepository
  ) {}

  async execute (): Promise<AddressesModel[]> {
    const foundAddress = await this.addressesRepository.getAll()
    if (!foundAddress.length) throw new NotFoundError('Addresses not found')
    return foundAddress
  }
}

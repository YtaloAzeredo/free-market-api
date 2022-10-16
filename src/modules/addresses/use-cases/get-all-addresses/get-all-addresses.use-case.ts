import { IUseCase } from '@interfaces/use-case.interface'
import { IAddressesRepository } from '@modules/addresses/repositories/addresses-repository.interface'
import NotFoundError from '@errors/not-found.error'
import { AddressesModel } from '@modules/addresses/models/addresses.model'

export class GetAllAddressesUseCase implements IUseCase {
  constructor (
    private readonly addressesRepository: IAddressesRepository
  ) {}

  async execute (): Promise<AddressesModel[]> {
    const foundAddresses = await this.addressesRepository.getAll()
    if (!foundAddresses.length) throw new NotFoundError(this.addressesRepository.getNotFoundMessage())
    return foundAddresses
  }
}

import { IUseCase } from '@interfaces/use-case.interface'
import { IAddressesRepository } from '@modules/addresses/repositories/addresses-repository.interface'
import NotFoundError from '@errors/not-found.error'
import { AddressesModel } from '@modules/addresses/models/addresses-model.interface'

export class GetOneAddressesUseCase implements IUseCase {
  constructor (
    private readonly addressesRepository: IAddressesRepository
  ) {}

  async execute (id: number): Promise<AddressesModel> {
    const foundAddress = await this.addressesRepository.getOne({ id })
    if (!foundAddress) throw new NotFoundError(this.addressesRepository.getNotFoundMessage())
    return foundAddress
  }
}

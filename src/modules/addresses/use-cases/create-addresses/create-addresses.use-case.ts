import { IUseCase } from '@interfaces/use-case.interface'
import { IUsersRepository } from '@modules/users/repositories/users-repository.interface'
import { IAddressesRepository } from '@modules/addresses/repositories/addresses-repository.interface'
import { AddressesModel } from '@modules/addresses/models/addresses-model.interface'
import NotFoundError from '@errors/not-found.error'

export class CreateAddressesUseCase implements IUseCase {
  constructor (
    private readonly usersRepository: IUsersRepository,
    private readonly addressesRepository: IAddressesRepository
  ) {}

  async execute (addressesData: AddressesModel): Promise<AddressesModel> {
    const foundUser = await this.usersRepository.getOne({ id: addressesData.user })
    if (!foundUser) throw new NotFoundError(this.usersRepository.getNotFoundMessage())
    return this.addressesRepository.store(addressesData)
  }
}

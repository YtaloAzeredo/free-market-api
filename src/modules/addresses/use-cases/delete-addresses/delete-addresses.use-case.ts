import NotFoundError from '@errors/not-found.error'
import { IUseCase } from '@interfaces/use-case.interface'
import { IAddressesRepository } from '@modules/addresses/repositories/addresses-repository.interface'

export class DeleteAddressesUseCase implements IUseCase {
  constructor (
    private readonly addressesRepository: IAddressesRepository
  ) {}

  async execute (id: number): Promise<string> {
    const foundAddress = await this.addressesRepository.getOne({ id })
    if (!foundAddress) throw new NotFoundError(this.addressesRepository.getNotFoundMessage())
    await this.addressesRepository.remove(foundAddress)
    return this.addressesRepository.getDeleteMessage()
  }
}

import { Address } from '@entities/address'
import { MemoryAddressRepository } from '@infrastructure/repositories/address/memory-address-repository'
import { DeleteAddressUseCase } from '.'

const repo = new MemoryAddressRepository()
const useCase = new DeleteAddressUseCase(repo)

beforeEach(() => {
  MemoryAddressRepository.addresses = []
})

describe('Delete address use case', () => {
  it('Should be able to delete address', async () => {
    const address = new Address({
      idUser: 'fakeid',
      state: 'SP',
      country: 'Brasil',
      city: 'São Paulo',
      zipcode: '15943000',
      street: 'Avenida top',
      number: '1982',
    })

    await repo.save(address)

    const addressesBefore = await repo.findAll()

    expect(addressesBefore).toBeDefined()
    expect(addressesBefore).toHaveLength(1)

    await useCase.execute({ id: address.id })

    const addressesAfter = await repo.findAll()

    expect(addressesAfter).toBeDefined()
    expect(addressesBefore).toHaveLength(0)
  })
})

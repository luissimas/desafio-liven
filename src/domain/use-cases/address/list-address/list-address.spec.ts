import { Address } from '@entities/address'
import { MemoryAddressRepository } from '@infrastructure/repositories/address/memory-address-repository'
import { ListAddressUseCase } from '.'

const repo = new MemoryAddressRepository()
const useCase = new ListAddressUseCase(repo)

beforeEach(() => {
  MemoryAddressRepository.addresses = []
})

describe('List address use case', () => {
  it('Should be able to list all addresses', async () => {
    const data = {
      idUser: 'fakeid',
      state: 'SP',
      country: 'Brasil',
      city: 'São Paulo',
      zipcode: '15943000',
      street: 'Avenida top',
      number: '1982',
    }

    const address = new Address(data)

    await repo.save(address)
    await repo.save(address)

    const result = await useCase.execute()

    expect(result).toBeDefined()
    expect(result).toHaveLength(2)
  })

  it('Should return an empty array when no addresses are registered', async () => {
    const result = await useCase.execute()

    expect(result).toBeDefined()
    expect(result).toHaveLength(0)
  })
})

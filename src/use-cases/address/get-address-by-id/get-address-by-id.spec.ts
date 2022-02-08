import { Address } from '@entities/address'
import { EntityNotFound } from '@errors'
import { MemoryAddressRepository } from '@infrastructure/repositories/address/memory-address-repository'
import { GetAddressByIdUseCase } from '.'

const repo = new MemoryAddressRepository()
const useCase = new GetAddressByIdUseCase(repo)

beforeEach(() => {
  MemoryAddressRepository.addresses = []
})

describe('Get address by id use case', () => {
  it('Should be able to get address by its id', async () => {
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

    const result = await useCase.execute({ id: address.id })

    expect(result).toBeDefined()
    expect(result).toMatchObject(data)
  })

  it('Should return error when address is not found', async () => {
    expect(async () => await useCase.execute({ id: '' })).rejects.toThrow(EntityNotFound)
  })
})

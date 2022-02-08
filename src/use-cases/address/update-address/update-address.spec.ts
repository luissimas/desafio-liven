import { Address } from '@entities/address'
import { EntityNotFound } from '@errors'
import { MemoryAddressRepository } from '@infrastructure/repositories/address/memory-address-repository'
import { UpdateAddressUseCase } from '.'
import { IUpdateAddressDTO } from './update-address-dto'

const repo = new MemoryAddressRepository()
const useCase = new UpdateAddressUseCase(repo)

beforeEach(() => {
  MemoryAddressRepository.addresses = []
})

describe('Update address use case', () => {
  it('Should be able to update all fields from address', async () => {
    const oldAddress = new Address({
      idUser: 'fakeid',
      state: 'SP',
      country: 'Brasil',
      city: 'São Paulo',
      zipcode: '15943000',
      street: 'Avenida top',
      number: '1982',
    })

    await repo.save(oldAddress)

    const data: IUpdateAddressDTO = {
      id: oldAddress.id,
      state: 'SS',
      country: 'Brasil',
      city: 'São José',
      zipcode: '10943290',
      street: 'Avenida muito top',
      number: '1381',
    }

    await useCase.execute(data)

    const address = await repo.findById(oldAddress.id)

    expect(address).toBeDefined()
    expect(address).toMatchObject(data)
  })

  it('Should not be able to update an inexistent address', async () => {
    expect(async () => await useCase.execute({ id: 'alksdjf' })).rejects.toThrow(EntityNotFound)
  })
})

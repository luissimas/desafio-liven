import { Address } from '@entities/address'
import { User } from '@entities/user'
import { UserNotFound } from '@errors'
import { MemoryAddressRepository } from '@infrastructure/repositories/address/memory-address-repository'
import { MemoryUserRepository } from '@infrastructure/repositories/user/memory-user-repository'
import { CreateAddressUseCase } from '.'
import { ICreateAddressDTO } from './create-address-dto'

const userRepo = new MemoryUserRepository()
const addressRepo = new MemoryAddressRepository()

const useCase = new CreateAddressUseCase(addressRepo, userRepo)

beforeEach(() => {
  MemoryAddressRepository.addresses = []
})

describe('Create addresses', () => {
  it('Should be able to create a new address', async () => {
    const user = new User({
      name: 'Jorge',
      email: 'jorge@gmail.com',
      password: 'banana1928',
    })

    await userRepo.save(user)

    const data: ICreateAddressDTO = {
      idUser: user.id,
      state: 'SP',
      country: 'Brasil',
      city: 'São Paulo',
      zipcode: '15943000',
      street: 'Avenida top',
      number: '1982',
    }

    const id = await useCase.execute(data)
    const registered = await addressRepo.findById(id)

    expect(id).toBeDefined()
    expect(registered).toBeDefined()

    if (registered instanceof Address) {
      expect(registered.idUser).toEqual(data.idUser)
      expect(registered.state).toEqual(data.state)
      expect(registered.country).toEqual(data.country)
      expect(registered.city).toEqual(data.city)
      expect(registered.zipcode).toEqual(data.zipcode)
      expect(registered.street).toEqual(data.street)
      expect(registered.number).toEqual(data.number)
    }
  })

  it('Should not be able to create address with invalid idUser', async () => {
    const data: ICreateAddressDTO = {
      idUser: 'lkajsdf',
      state: 'SP',
      country: 'Brasil',
      city: 'São Paulo',
      zipcode: '15943000',
      street: 'Avenida top',
      number: '1982',
    }

    expect(async () => await useCase.execute(data)).rejects.toThrow(UserNotFound)
  })
})

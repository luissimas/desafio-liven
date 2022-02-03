import { User } from '@entities/user'
import { InvalidFieldError, UserAlreadyExists } from '@errors'
import { MemoryUserRepository } from '@infrasctructure/repositories/user/memory-user-repository'
import { CreateUserUseCase } from '.'
import { ICreateUserDTO } from './create-user-dto'

const repo = new MemoryUserRepository()
const useCase = new CreateUserUseCase(repo)

beforeEach(() => {
  MemoryUserRepository.users = []
})

describe('Create user use case', () => {
  it('Should be able to create a new user', async () => {
    const data: ICreateUserDTO = {
      name: 'Jorge',
      email: 'jorge@gmail.com',
      password: 'banana1928',
    }

    const id = await useCase.execute(data)
    const registered = await repo.findById(id)

    expect(id).toBeDefined()
    expect(registered).toBeDefined()

    if (registered instanceof User) {
      expect(registered.name).toEqual(data.name)
      expect(registered.email).toEqual(data.email)
      expect(registered.password).not.toEqual(data.password)
    }
  })

  it('Should not be able to create user with registered e-mail', async () => {
    const data: ICreateUserDTO = {
      name: 'Jorge',
      email: 'jorge@gmail.com',
      password: 'banana1928',
    }

    await useCase.execute(data)

    await expect(async () => await useCase.execute(data)).rejects.toThrow(UserAlreadyExists)
  })

  it('Should not be able to create user with invalid name', async () => {
    const data: ICreateUserDTO = {
      name: '',
      email: 'jorge@gmail.com',
      password: 'banana1928',
    }

    await expect(async () => await useCase.execute(data)).rejects.toThrow(InvalidFieldError)
  })

  it('Should not be able to create user with invalid name', async () => {
    const data: ICreateUserDTO = {
      name: 'Jorge',
      email: '',
      password: 'banana1928',
    }

    await expect(async () => await useCase.execute(data)).rejects.toThrow(InvalidFieldError)
  })

  it('Should not be able to create user with invalid password', async () => {
    const data: ICreateUserDTO = {
      name: 'Jorge',
      email: 'jorge@gmail.com',
      password: '',
    }

    await expect(async () => await useCase.execute(data)).rejects.toThrow(InvalidFieldError)
  })
})

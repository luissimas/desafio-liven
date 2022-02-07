import { User } from '@entities/user'
import { EntityNotFound } from '@errors'
import { MemoryUserRepository } from '@infrastructure/repositories/user/memory-user-repository'
import { GetUserByIdUseCase } from '.'

const repo = new MemoryUserRepository()
const useCase = new GetUserByIdUseCase(repo)

beforeEach(() => {
  MemoryUserRepository.users = []
})

describe('Get user by id use case', () => {
  it('Should be able to get user from its id', async () => {
    const user = new User({
      name: 'Jorge',
      age: 20,
      email: 'jorge@gmail.com',
      password: 'banana1928',
    })

    await repo.save(user)

    const result = await useCase.execute({ id: user.id })

    expect(result).toBeDefined()
    expect(result).toMatchObject(user)
  })

  it('Should return error when user is not found', () => {
    expect(async () => await useCase.execute({ id: '' })).rejects.toThrow(EntityNotFound)
  })
})

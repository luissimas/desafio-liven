import { User } from '@entities/user'
import { MemoryUserRepository } from '@infrastructure/repositories/user/memory-user-repository'
import { ListUserUseCase } from '.'

const repo = new MemoryUserRepository()
const useCase = new ListUserUseCase(repo)

beforeEach(() => {
  MemoryUserRepository.users = []
})

describe('List user use case', () => {
  it('Should be able to list all users', async () => {
    const data = {
      name: 'Jorge',
      email: 'jorge@gmail.com',
      password: 'banana1928',
    }

    const user = new User(data)

    await repo.save(user)
    await repo.save(user)

    const result = await useCase.execute()

    expect(result).toBeDefined()
    expect(result).toHaveLength(2)
  })

  it('Should return an empty array whe no users are registered', async () => {
    const result = await useCase.execute()

    expect(result).toBeDefined()
    expect(result).toHaveLength(0)
  })
})

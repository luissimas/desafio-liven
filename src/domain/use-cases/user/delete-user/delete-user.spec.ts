import { User } from '@entities/user'
import { EntityNotFound } from '@errors'
import { MemoryUserRepository } from '@infrastructure/repositories/user/memory-user-repository'
import { DeleteUserUseCase } from '.'

const repo = new MemoryUserRepository()
const useCase = new DeleteUserUseCase(repo)

beforeEach(() => {
  MemoryUserRepository.users = []
})

describe('Delete user use case', () => {
  it('Should be able to delete user', async () => {
    const data = {
      name: 'Jorge',
      email: 'jorge@hotmail.com',
      password: 'namamamam',
    }

    const user = new User(data)

    await repo.save(user)

    const usersBefore = await repo.findAll()

    expect(usersBefore).toBeDefined()
    expect(usersBefore).toHaveLength(1)

    await useCase.execute({ id: user.id })

    const usersAfter = await repo.findAll()

    expect(usersAfter).toBeDefined()
    expect(usersAfter).toHaveLength(0)
  })

  it('Should not be able to delete an inexistent user', async () => {
    expect(async () => await useCase.execute({ id: 'alskdjf' })).rejects.toThrow(EntityNotFound)
  })
})

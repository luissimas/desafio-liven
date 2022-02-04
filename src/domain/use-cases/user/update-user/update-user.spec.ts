import { User } from '@entities/user'
import { MemoryUserRepository } from '@infrastructure/repositories/user/memory-user-repository'
import { UpdateUserUseCase } from '.'
import { IUpdateUserDTO } from './update-user-dto'
import { compare } from 'bcrypt'

const repo = new MemoryUserRepository()
const useCase = new UpdateUserUseCase(repo)

beforeEach(() => {
  MemoryUserRepository.users = []
})

describe('Update user use case', () => {
  it('Should be able to update all fields from user', async () => {
    const oldUser = new User({
      name: 'Jorge',
      email: 'jorge@gmail.com',
      password: 'banana1928',
    })

    await repo.save(oldUser)

    const data: IUpdateUserDTO = {
      id: oldUser.id,
      name: 'Jorge Silva',
      email: 'naoeojorge@hotmail.com',
      password: 'batata9883',
    }

    await useCase.execute(data)

    const user = await repo.findById(oldUser.id)

    expect(user).toBeDefined()

    if (user) {
      expect(user.id).toEqual(oldUser.id)
      expect(user.name).toEqual(data.name)
      expect(user.email).toEqual(data.email)

      if (data.password) {
        const match = await compare(data.password, user.password)
        expect(match).toBeTruthy()
      }
    }
  })
})

import { User } from './index'
import { InvalidEmailError, InvalidNameError, InvalidPasswordError } from './errors'

describe('User', () => {
  it('Should be able to create user', async () => {
    const data = {
      name: 'Jorge',
      email: 'jorge@hotmail.com',
      password: 'banana123',
    }

    const user = await User.create(data)

    expect(user).toBeDefined()
    expect(user).toHaveProperty('id')
    expect(user).toHaveProperty('password')
    expect(user).toHaveProperty('email')
    expect(user).toHaveProperty('name')

    if (user instanceof User) {
      expect(user.name).toEqual(data.name)
      expect(user.email).toEqual(data.email)
      expect(user.id).toBeDefined()
      expect(user.password).not.toEqual(data.password)
    }
  })

  it('Should return error on invalid name', async () => {
    const data = {
      name: '',
      email: 'jorge@hotmail.com',
      password: 'banana123',
    }

    expect(async () => await User.create(data)).rejects.toThrow(InvalidNameError)
  })

  it('Should return error on invalid email', async () => {
    const data = {
      name: 'jorge',
      email: 'jorgehotmail.com',
      password: 'banana123',
    }

    expect(async () => await User.create(data)).rejects.toThrow(InvalidEmailError)
  })

  it('Should return error on invalid password', async () => {
    const data = {
      name: 'jorge',
      email: 'jorge@hotmail.com',
      password: '123',
    }

    expect(async () => await User.create(data)).rejects.toThrow(InvalidPasswordError)
  })
})

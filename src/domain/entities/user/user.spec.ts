import { User } from '.'
import { InvalidFieldError } from '@errors'

describe('User', () => {
  it('Should be able to instantiate user', async () => {
    const data = {
      name: 'Jorge',
      email: 'jorge@hotmail.com',
      password: 'banana123',
    }

    const user = new User(data)

    expect(user).toBeDefined()
    expect(user).toBeInstanceOf(User)
    expect(user).toHaveProperty('id')
    expect(user).toHaveProperty('password')
    expect(user).toHaveProperty('email')
    expect(user).toHaveProperty('name')
    expect(user.name).toEqual(data.name)
    expect(user.email).toEqual(data.email)
    expect(user.password).toEqual(data.password)
    expect(user.id).toBeDefined()
  })

  it('Should throw error on invalid name', async () => {
    const data = {
      name: '',
      email: 'jorge@hotmail.com',
      password: 'banana123',
    }

    expect(() => new User(data)).toThrow(InvalidFieldError)
  })

  it('Should throw error on invalid email', async () => {
    const data = {
      name: 'jorge',
      email: 'jorgehotmail.com',
      password: 'banana123',
    }

    expect(() => new User(data)).toThrow(InvalidFieldError)
  })

  it('Should throw error on empty email', async () => {
    const data = {
      name: 'jorge',
      email: '',
      password: 'banana123',
    }

    expect(() => new User(data)).toThrow(InvalidFieldError)
  })

  it('Should throw error on invalid password', async () => {
    const data = {
      name: 'jorge',
      email: 'jorge@hotmail.com',
      password: '123',
    }

    expect(() => new User(data)).toThrow(InvalidFieldError)
  })
})

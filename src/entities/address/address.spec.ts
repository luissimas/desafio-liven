import { Address } from '.'
import { InvalidFieldError } from './errors'

describe('Address', () => {
  it('Should be able to instantiate address', () => {
    const data = {
      state: 'SP',
      country: 'Brazil',
      city: 'São Carlos',
      zipcode: '13310888',
      street: 'Rua das flores',
      number: '392B',
    }

    const address = new Address(data)

    expect(address).toBeDefined()
    expect(address).toBeInstanceOf(Address)
    expect(address).toHaveProperty('id')
    expect(address).toHaveProperty('state')
    expect(address).toHaveProperty('country')
    expect(address).toHaveProperty('city')
    expect(address).toHaveProperty('zipcode')
    expect(address).toHaveProperty('street')
    expect(address).toHaveProperty('number')
    expect(address.state).toEqual(data.state)
    expect(address.country).toEqual(data.country)
    expect(address.city).toEqual(data.city)
    expect(address.zipcode).toEqual(data.zipcode)
    expect(address.street).toEqual(data.street)
    expect(address.number).toEqual(data.number)
  })

  it('Should throw error on invalid state', () => {
    const dataOver = {
      state: 'SPP',
      country: 'Brazil',
      city: 'São Carlos',
      zipcode: '13310888',
      street: 'Rua das flores',
      number: '392B',
    }

    const dataUnder = {
      state: '',
      country: 'Brazil',
      city: 'São Carlos',
      zipcode: '13310888',
      street: 'Rua das flores',
      number: '392B',
    }

    expect(() => new Address(dataOver)).toThrow(InvalidFieldError)
    expect(() => new Address(dataUnder)).toThrow(InvalidFieldError)
  })

  it('Should throw error on invalid country', () => {
    const data = {
      state: 'SP',
      country: '',
      city: 'São Carlos',
      zipcode: '13310888',
      street: 'Rua das flores',
      number: '392B',
    }

    expect(() => new Address(data)).toThrow(InvalidFieldError)
  })

  it('Should throw error on invalid city', () => {
    const data = {
      state: 'SP',
      country: 'Brazil',
      city: '',
      zipcode: '13310888',
      street: 'Rua das flores',
      number: '392B',
    }

    expect(() => new Address(data)).toThrow(InvalidFieldError)
  })

  it('Should throw error on invalid zipcode', () => {
    const data = {
      state: 'SP',
      country: 'Brazil',
      city: 'São Carlos',
      zipcode: '',
      street: 'Rua das flores',
      number: '392B',
    }

    expect(() => new Address(data)).toThrow(InvalidFieldError)
  })

  it('Should throw error on invalid street', () => {
    const data = {
      state: 'SP',
      country: 'Brazil',
      city: 'São Carlos',
      zipcode: '13310888',
      street: '',
      number: '392B',
    }

    expect(() => new Address(data)).toThrow(InvalidFieldError)
  })

  it('Should throw error on invalid number', () => {
    const data = {
      state: 'SP',
      country: 'Brazil',
      city: 'São Carlos',
      zipcode: '13310888',
      street: 'Rua das flores',
      number: '',
    }

    expect(() => new Address(data)).toThrow(InvalidFieldError)
  })
})

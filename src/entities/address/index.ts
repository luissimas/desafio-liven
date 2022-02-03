import { v4 as uuid } from 'uuid'
import { InvalidFieldError } from './errors'

export class Address {
  public readonly id: string
  public readonly state: string
  public readonly country: string
  public readonly city: string
  public readonly zipcode: string
  public readonly street: string
  public readonly number: string

  constructor(props: Omit<Address, 'id'>, id?: string) {
    Address.validateState(props.state)
    Address.validateCountry(props.country)
    Address.validateCity(props.city)
    Address.validateZipcode(props.zipcode)
    Address.validateStreet(props.street)
    Address.validateNumber(props.number)

    this.id = id || uuid()
    this.state = props.state
    this.country = props.country
    this.city = props.city
    this.zipcode = props.zipcode
    this.street = props.street
    this.number = props.number
  }

  public static validateState(state: string) {
    if (state.length !== 2) {
      throw new InvalidFieldError(state, 'state', 'State must contain exactly 2 characters.')
    }
  }

  public static validateCountry(country: string) {
    if (country.length < 3) {
      throw new InvalidFieldError(country, 'country', 'Country must contain at least 3 characters.')
    }
  }

  public static validateCity(city: string) {
    if (city.length < 3) {
      throw new InvalidFieldError(city, 'city', 'City must contain at least 3 characters.')
    }
  }

  public static validateZipcode(zipcode: string) {
    if (zipcode.length < 5) {
      throw new InvalidFieldError(zipcode, 'zipcode', 'Zipcode must contain at least 5 characters.')
    }
  }

  public static validateStreet(street: string) {
    if (street.length < 5) {
      throw new InvalidFieldError(street, 'street', 'Street must contain at least 5 characters.')
    }
  }

  public static validateNumber(number: string) {
    if (number.length < 1) {
      throw new InvalidFieldError(number, 'number', 'Number must contain at least 1 character.')
    }
  }
}

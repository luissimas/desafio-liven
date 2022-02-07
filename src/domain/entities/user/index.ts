import { v4 as uuid } from 'uuid'
import { InvalidFieldError } from '@errors'

export class User {
  public readonly id: string
  public readonly name: string
  public readonly age: number
  public readonly email: string
  public readonly password: string

  constructor(props: Omit<User, 'id'>, id?: string) {
    User.validateName(props.name)
    User.validateEmail(props.email)
    User.validateAge(props.age)
    User.validatePassword(props.password)

    this.id = id || uuid()
    this.name = props.name
    this.age = props.age
    this.email = props.email
    this.password = props.password
  }

  public static validateName(name: string) {
    if (name.length < 3) {
      throw new InvalidFieldError(name, 'name', 'Name must contain at least 3 characters.')
    }
  }

  public static validateAge(age: number) {
    if (!age || age < 0 || age > 130) {
      throw new InvalidFieldError(age, 'age', 'Age must be a number between 0 and 130')
    }
  }

  public static validateEmail(email: string) {
    if (email.length < 3 || !email.includes('@')) {
      throw new InvalidFieldError(email, 'email', 'Invalid email address.')
    }
  }

  public static validatePassword(password: string) {
    if (password.length < 5) {
      throw new InvalidFieldError(password, 'password', 'Password must contain at least 5 cheracters')
    }
  }
}

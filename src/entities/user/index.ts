import { v4 as uuid } from 'uuid'
import { hash } from 'bcrypt'
import { InvalidEmailError, InvalidNameError, InvalidPasswordError } from './errors'

export class User {
  public readonly id: string

  public name: string
  public email: string
  public password: string

  private constructor(id: string, name: string, email: string, password: string) {
    this.id = id
    this.name = name
    this.email = email
    this.password = password
  }

  public static async create(props: Omit<User, 'id'>, id?: string): Promise<User | never> {
    const passwordHash = await hash(props.password, 12)

    this.validateName(props.name)
    this.validateEmail(props.email)
    this.validatePassword(props.password)

    if (!id) {
      return new User(uuid(), props.name, props.email, passwordHash)
    } else {
      return new User(id, props.name, props.email, passwordHash)
    }
  }

  public static validateName(name: string) {
    if (name.length < 3) {
      throw new InvalidNameError(name, 'Name must contain at least 3 characters.')
    }
  }

  public static validateEmail(email: string) {
    if (email.length < 3 || !email.includes('@')) {
      throw new InvalidEmailError(email, 'Invalid email address.')
    }
  }

  public static validatePassword(password: string) {
    if (password.length < 5) {
      throw new InvalidPasswordError(password, 'Password must contain at least 5 cheracters')
    }
  }
}

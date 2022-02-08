import { User } from '@entities/user'
import { IUserData } from '@entities/user/user-data'

export type filter = {
  name?: string
  age?: number
  email?: string
}

export interface IUserRepository {
  save(user: User): Promise<void>
  findAll(filters?: filter): Promise<IUserData[]>
  findById(id: string): Promise<IUserData | undefined>
  findByEmail(email: string): Promise<IUserData | undefined>
  update(user: User): Promise<void>
  delete(user: User): Promise<void>
}

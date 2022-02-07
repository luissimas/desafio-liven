import { User } from '@entities/user'

export type filter = {
  name?: string
  age?: number
  email?: string
}

export interface IUserRepository {
  save(user: User): Promise<void>
  findAll(filters?: filter): Promise<User[]>
  findById(id: string): Promise<User | undefined>
  findByEmail(email: string): Promise<User | undefined>
  update(user: User): Promise<void>
  delete(user: User): Promise<void>
}

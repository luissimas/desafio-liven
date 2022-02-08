import { User } from '@entities/user'
import { UserModel } from '@infrastructure/database/objection/models/user'
import { filter, IUserRepository } from '@use-cases/user/ports/user-repository'

export class ObjectionUserRepository implements IUserRepository {
  async save(user: User): Promise<void> {
    await UserModel.query().insert(user)
  }

  async findAll(filters?: filter): Promise<User[]> {
    const users = await UserModel.query().modify(query => {
      if (filters) {
        query.where(filters)
      }
    })

    return users
  }

  async findById(id: string): Promise<User | undefined> {
    const user = await UserModel.query().findById(id)

    return user
  }

  async findByEmail(email: string): Promise<User | undefined> {
    return UserModel.query().where({ email }).first()
  }

  async update(user: User): Promise<void> {
    await UserModel.query().findById(user.id).patch(user)
  }

  async delete(user: User): Promise<void> {
    await UserModel.query().deleteById(user.id)
  }
}

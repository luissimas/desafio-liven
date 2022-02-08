import { Model } from 'objection'
import { AddressModel } from './address'

export class UserModel extends Model {
  public readonly id!: string
  public readonly name!: string
  public readonly age!: number
  public readonly email!: string
  public readonly password!: string

  static get tableName() {
    return 'user'
  }

  static get relationMappings() {
    return {
      addresses: {
        relation: Model.HasManyRelation,
        modelClass: AddressModel,
        join: {
          from: 'user.id',
          to: 'address.idUser',
        },
      },
    }
  }
}

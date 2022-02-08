import { Model } from 'objection'

export class AddressModel extends Model {
  public readonly id!: string
  public readonly idUser!: string
  public readonly state!: string
  public readonly country!: string
  public readonly city!: string
  public readonly zipcode!: string
  public readonly street!: string
  public readonly number!: string

  static get tableName() {
    return 'address'
  }
}

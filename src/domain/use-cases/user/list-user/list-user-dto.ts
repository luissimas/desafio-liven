import { Address } from '@entities/address'
import { User } from '@entities/user'

export interface IListUserDTO extends User {
  addresses: Address[]
}

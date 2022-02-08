import { Address } from '@entities/address'
import { User } from '.'

export interface IUserData extends User {
  addresses: Address[]
}

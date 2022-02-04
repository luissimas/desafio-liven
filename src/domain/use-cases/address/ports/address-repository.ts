import { Address } from '@entities/address'

export interface IAddressRepository {
  save(address: Address): Promise<void>
  findAll(): Promise<Address[]>
  findById(id: string): Promise<Address | undefined>
  findByUser(user_id: string): Promise<Address | undefined>
  update(address: Address): Promise<void>
  delete(id: string): Promise<void>
}

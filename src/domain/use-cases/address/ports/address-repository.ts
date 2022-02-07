import { Address } from '@entities/address'

export type filter = {
  idUser?: string
  state?: string
  country?: string
  city?: string
  zipcode?: string
  street?: string
  number?: string
}

export interface IAddressRepository {
  save(address: Address): Promise<void>
  findAll(filters?: filter): Promise<Address[]>
  findById(id: string): Promise<Address | undefined>
  findByUser(idUser: string): Promise<Address | undefined>
  update(address: Address): Promise<void>
  delete(address: Address): Promise<void>
}

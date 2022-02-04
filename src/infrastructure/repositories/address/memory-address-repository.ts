import { Address } from '@entities/address'
import { IAddressRepository } from '@use-cases/address/ports/address-repository'

export class MemoryAddressRepository implements IAddressRepository {
  static addresses: Array<Address> = []

  async save(address: Address): Promise<void> {
    MemoryAddressRepository.addresses.push(address)
  }

  async findAll(): Promise<Address[]> {
    return MemoryAddressRepository.addresses
  }

  async findById(id: string): Promise<Address | undefined> {
    const address = MemoryAddressRepository.addresses.find(user => user.id === id)

    return address
  }

  async findByUser(idUser: string): Promise<Address | undefined> {
    const address = MemoryAddressRepository.addresses.find(address => address.idUser === idUser)

    return address
  }

  async update(address: Address): Promise<void> {
    const id = address.id
    const index = MemoryAddressRepository.addresses.findIndex(address => address.id === id)

    MemoryAddressRepository.addresses[index] = address
  }

  async delete(address: Address): Promise<void> {
    const id = address.id
    const index = MemoryAddressRepository.addresses.findIndex(address => address.id === id)

    MemoryAddressRepository.addresses.splice(index, 1)
  }
}

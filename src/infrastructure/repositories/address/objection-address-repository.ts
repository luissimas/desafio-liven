import { Address } from '@entities/address'
import { AddressModel } from '@infrastructure/database/objection/models/address'
import { UserModel } from '@infrastructure/database/objection/models/user'
import { filter, IAddressRepository } from '@use-cases/address/ports/address-repository'

export class ObjectionAddressRepository implements IAddressRepository {
  async save(address: Address): Promise<void> {
    await AddressModel.query().insert(address)
  }

  async findAll(filters?: filter): Promise<Address[]> {
    const addresses = await AddressModel.query().modify(query => {
      if (filters) {
        query.where(filters)
      }
    })

    return addresses
  }

  async findById(id: string): Promise<Address | undefined> {
    const address = await AddressModel.query().findById(id)

    return address
  }

  async findByUser(idUser: string): Promise<Address[]> {
    const address = await AddressModel.query().where({ idUser })

    return address
  }

  async update(address: Address): Promise<void> {
    await UserModel.query().findById(address.id).patch(address)
  }

  async delete(address: Address): Promise<void> {
    await UserModel.query().deleteById(address.id)
  }
}

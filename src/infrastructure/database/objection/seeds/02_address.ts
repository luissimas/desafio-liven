import { Knex } from 'knex'
import { v4 as uuid } from 'uuid'

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('address').del()

  const fernando = await knex('user').where({ name: 'Fernando Pessoa' }).select('id').first()
  const camus = await knex('user').where({ name: 'Albert Camus' }).select('id').first()

  const addresses = [
    {
      id: uuid(),
      idUser: fernando.id,
      state: 'CP',
      country: 'Portugal',
      city: 'Lisboa',
      zipcode: '1250-088',
      street: 'Rua Coelho da Rocha',
      number: '16',
    },
    {
      id: uuid(),
      idUser: camus.id,
      state: '11',
      country: 'Algeria',
      city: 'Mondovi',
      zipcode: '1937-000',
      street: 'Via Ortigara',
      number: '938',
    },
  ]

  // Inserts seed entries
  await knex('address').insert(addresses)
}

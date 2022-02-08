import { Knex } from 'knex'
import { hashSync } from 'bcrypt'
import { v4 as uuid } from 'uuid'

const hash = (password: string) => hashSync(password, 12)

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('user').del()

  const users = [
    {
      id: uuid(),
      name: 'Fernando Pessoa',
      age: 47,
      email: 'fernando@yahoo.com',
      password: hash('desassossego'),
    },
    {
      id: uuid(),
      name: 'Albert Camus',
      age: 30,
      email: 'camus0098@hotmail.com',
      password: hash('happysisyphus'),
    },
  ]

  // Inserts seed entries
  await knex('user').insert(users)
}

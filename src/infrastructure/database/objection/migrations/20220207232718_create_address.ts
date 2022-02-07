import { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('address', table => {
    table.string('id').primary()

    table.string('id_user').notNullable()
    table.foreign('id_user').references('id').inTable('user').onDelete('CASCADE')

    table.string('state', 2).notNullable()
    table.string('country').notNullable()
    table.string('city').notNullable()
    table.string('zipcode').notNullable()
    table.string('street').notNullable()
    table.string('number').notNullable()

    table.timestamps(true, true)
  })
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('address')
}

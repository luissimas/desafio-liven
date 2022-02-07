import { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('user', table => {
    table.string('id').primary()

    table.string('name').notNullable()
    table.integer('age').notNullable().unsigned()
    table.string('email').notNullable().unique()
    table.string('password').notNullable()

    table.timestamps(true, true)
  })
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('user')
}

import { Knex } from 'knex'
import { knexSnakeCaseMappers } from 'objection'

import 'dotenv/config'

const config: Knex.Config = {
  client: 'mysql',
  connection: {
    database: 'treinamento_liven',
    user: 'root',
    password: '',
    timezone: 'utc',
  },
  pool: {
    min: 2,
    max: 10,
  },
  seeds: {
    directory: 'src/infrastructure/database/objection/seeds',
  },
  migrations: {
    tableName: 'knex_migrations',
    directory: 'src/infrastructure/database/objection/migrations',
  },
  ...knexSnakeCaseMappers(),
}

export default config

import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').notNullable().primary()

      table.string('email', 60).notNullable().unique()
      table.string('password', 20).notNullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}

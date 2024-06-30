import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'clients'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').notNullable().primary()

      table.string('name', 30).notNullable()
      table.string('tax_id', 20).notNullable().unique()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}

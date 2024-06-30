import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'products'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').notNullable().primary()

      table.string('name', 30).notNullable()
      table.integer('quantity').notNullable().unsigned()
      table.decimal('price', 10, 2).notNullable().unsigned()
      table.boolean('deleted').notNullable().defaultTo(false)
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}

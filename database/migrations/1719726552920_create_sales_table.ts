import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'sales'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').notNullable().primary()

      table
        .integer('client_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('clients')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
      table.integer('product_id').notNullable().unsigned().references('id').inTable('products')
      table.integer('quantity').notNullable().unsigned()
      table.decimal('price', 10, 2).notNullable().unsigned()
      table.decimal('total_price', 10, 2).notNullable().unsigned()
      table.dateTime('date').nullable().defaultTo(this.now())
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}

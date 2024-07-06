import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'addresses'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').notNullable().primary()

      table.string('street', 150).notNullable()
      table.string('number', 8).notNullable()
      table.string('neighborhood', 60).notNullable()
      table.string('city', 60).notNullable()
      table.string('state', 60).notNullable()
      table.string('country', 60).notNullable()
      table.string('zip', 15).notNullable()
      table
        .integer('client_id')
        .unsigned()
        .references('id')
        .inTable('clients')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}

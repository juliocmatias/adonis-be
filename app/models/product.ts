import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import Sale from '#models/sale'
import type { HasMany } from '@adonisjs/lucid/types/relations'

export default class Product extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare name: string

  @column()
  declare quantity: number

  @column()
  declare price: number

  @column()
  declare deleted: boolean

  @hasMany(() => Sale)
  declare sales: HasMany<typeof Sale>
}

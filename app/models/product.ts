import { BaseModel, column } from '@adonisjs/lucid/orm'

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
}

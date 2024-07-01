import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import Client from '#models/client'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'

export default class Phone extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare number: string

  @column()
  declare clientId: number

  @belongsTo(() => Client)
  declare client: BelongsTo<typeof Client>
}

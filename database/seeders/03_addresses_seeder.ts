import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Address from '#models/address'

export default class extends BaseSeeder {
  async run() {
    await Address.createMany([
      {
        street: 'Winterfell Street',
        number: '1',
        neighborhood: 'Winterfell',
        city: 'Winterfell',
        state: 'The North',
        country: 'Westeros',
        zip: '12345-678',
        clientId: 1,
      },
      {
        street: 'Dragonstone Street',
        number: '2',
        neighborhood: 'Dragonstone',
        city: 'Dragonstone',
        state: 'Crownlands',
        country: 'Westeros',
        zip: '98765-432',
        clientId: 2,
      },
    ])
  }
}

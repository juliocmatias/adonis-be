import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Phone from '#models/phone'

export default class extends BaseSeeder {
  async run() {
    await Phone.createMany([
      {
        number: '123456789',
        clientId: 1,
      },
      {
        number: '987654321',
        clientId: 2,
      },
    ])
  }
}

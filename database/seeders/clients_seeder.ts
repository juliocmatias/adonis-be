import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Client from '#models/client'
export default class extends BaseSeeder {
  async run() {
    await Client.createMany([
      {
        name: 'John Snow',
        taxId: '12345678912',
      },
      {
        name: 'Daenerys Targaryen',
        taxId: '98765432112',
      },
    ])
  }
}

import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Sale from '#models/sale'

export default class extends BaseSeeder {
  async run() {
    await Sale.createMany([
      {
        clientId: 1,
        productId: 1,
        quantity: 10,
        date: '2021-01-01 00:00:00',
      },
      {
        clientId: 1,
        productId: 2,
        quantity: 10,
        date: '2021-01-02 00:00:00',
      },
      {
        clientId: 1,
        productId: 1,
        quantity: 10,
        date: '2021-02-02 00:00:00',
      },
      {
        clientId: 1,
        productId: 2,
        quantity: 10,
        date: '2021-02-01 00:00:00',
      },
      {
        clientId: 2,
        productId: 2,
        quantity: 20,
        date: '2021-01-01 00:00:00',
      },
      {
        clientId: 2,
        productId: 1,
        quantity: 20,
        date: '2021-01-02 00:00:00',
      },
      {
        clientId: 2,
        productId: 2,
        quantity: 20,
        date: '2021-02-02 00:00:00',
      },
      {
        clientId: 2,
        productId: 1,
        quantity: 20,
        date: '2021-02-01 00:00:00',
      },
    ])
  }
}

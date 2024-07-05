import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Sale from '#models/sale'

export default class extends BaseSeeder {
  async run() {
    await Sale.createMany([
      {
        clientId: 1,
        productId: 1,
        quantity: 10,
        price: 10.0,
        totalPrice: 100.0,
        date: '2021-01-01 00:00:00',
      },
      {
        clientId: 1,
        productId: 2,
        quantity: 10,
        price: 20.0,
        totalPrice: 200.0,
        date: '2021-01-02 00:00:00',
      },
      {
        clientId: 1,
        productId: 1,
        quantity: 10,
        price: 10.0,
        totalPrice: 100.0,
        date: '2021-02-02 00:00:00',
      },
      {
        clientId: 1,
        productId: 2,
        quantity: 10,
        price: 20.0,
        totalPrice: 200.0,
        date: '2021-02-01 00:00:00',
      },
      {
        clientId: 2,
        productId: 2,
        quantity: 20,
        price: 20.0,
        totalPrice: 400.0,
        date: '2021-01-01 00:00:00',
      },
      {
        clientId: 2,
        productId: 1,
        quantity: 20,
        price: 10.0,
        totalPrice: 200.0,
        date: '2021-01-02 00:00:00',
      },
      {
        clientId: 2,
        productId: 2,
        quantity: 20,
        price: 20.0,
        totalPrice: 400.0,
        date: '2021-02-02 00:00:00',
      },
      {
        clientId: 2,
        productId: 1,
        quantity: 20,
        price: 10.0,
        totalPrice: 200.0,
        date: '2021-02-01 00:00:00',
      },
    ])
  }
}

import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Product from '#models/product'

export default class extends BaseSeeder {
  async run() {
    await Product.createMany([
      {
        name: 'Product 1',
        quantity: 100,
        price: 10.0,
      },
      {
        name: 'Product 2',
        quantity: 200,
        price: 20.0,
      },
    ])
  }
}

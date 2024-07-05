import { BaseSeeder } from '@adonisjs/lucid/seeders'
import User from '#models/user'
import bcrypt from 'bcryptjs'

export default class extends BaseSeeder {
  private SALT_ROUNDS = Number.parseInt(process.env.BCRYPT_SALT_ROUNDS || '10', 10)

  private async hashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, this.SALT_ROUNDS)
  }

  async run() {
    await User.createMany([
      {
        email: 'johndoe@john.com',
        password: await this.hashPassword('123456'),
      },
      {
        email: 'user@user.com',
        password: await this.hashPassword('123456'),
      },
    ])
  }
}

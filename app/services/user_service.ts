import User from '#models/user'
import { ServiceResponse } from '../interfaces/service_response.js'
import bcrypt from 'bcryptjs'
import { UserWithoutPassword } from '../interfaces/users/user_with_pass.js'

export default class UserService {
  private SALT_ROUNDS = Number.parseInt(process.env.BCRYPT_SALT_ROUNDS || '10', 10)
  constructor(private userModel = User) {}

  async store(email: string, password: string): Promise<ServiceResponse<UserWithoutPassword>> {
    try {
      if (!email || !password) {
        return { status: 'BAD_REQUEST', data: { message: 'Email and password are required' } }
      }

      const user = await this.userModel.findBy('email', email)

      if (user) {
        return { status: 'CONFLICT', data: { message: 'User already exists' } }
      }

      const hashedPassword = await bcrypt.hash(password, this.SALT_ROUNDS)

      const newUser = await this.userModel.create({ email, password: hashedPassword })

      const userWithoutPassword = newUser.serialize({
        fields: { omit: ['password'] },
      }) as UserWithoutPassword

      return { status: 'CREATED', data: userWithoutPassword }
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Unknown error occurred'
      return { status: 'INTERNAL_SERVER_ERROR', data: { message } }
    }
  }

  async update(
    id: string,
    email: string,
    password: string
  ): Promise<ServiceResponse<UserWithoutPassword>> {
    try {
      const user = await this.userModel.find(id)

      if (!user) {
        return { status: 'NOT_FOUND', data: { message: 'User not found' } }
      }

      if (email && (await this.userModel.findBy('email', email))) {
        return { status: 'CONFLICT', data: { message: 'User already exists' } }
      }

      if (!email && !password) {
        return { status: 'BAD_REQUEST', data: { message: 'Email or password is required' } }
      }

      if (email) user.email = email

      if (password) {
        const hashedPassword = await bcrypt.hash(password, this.SALT_ROUNDS)
        user.password = hashedPassword
      }

      await user.save()

      const userWithoutPassword = user.serialize({
        fields: { omit: ['password'] },
      }) as UserWithoutPassword

      return { status: 'SUCCESSFUL', data: userWithoutPassword }
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Unknown error occurred'
      return { status: 'INTERNAL_SERVER_ERROR', data: { message } }
    }
  }
}

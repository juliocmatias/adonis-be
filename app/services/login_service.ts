import User from '#models/user'
import { ServiceResponse } from '../interfaces/service_response.js'
import bcrypt from 'bcryptjs'
import Token from '../interfaces/token_interface.js'
import Jwt from '../utils/jwt.js'

export default class LoginService {
  constructor(
    private userModel = User,
    private jwtService = Jwt
  ) {}

  async store(email: string, password: string): Promise<ServiceResponse<Token>> {
    try {
      if (!email || !password) {
        return { status: 'BAD_REQUEST', data: { message: 'Email and password are required' } }
      }

      const user = await this.userModel.findBy('email', email)
      if (!user || !bcrypt.compareSync(password, user.password)) {
        return { status: 'UNAUTHORIZED', data: { message: 'Invalid email or password' } }
      }

      const { id } = user
      const token = this.jwtService.sign({ id, email })

      return { status: 'SUCCESSFUL', data: { token } }
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Unknown error occurred'
      return { status: 'INTERNAL_SERVER_ERROR', data: { message } }
    }
  }
}
